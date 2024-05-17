import { component$, Slot, useStyles$, useStore, useVisibleTask$ } from '@builder.io/qwik';
import animateStyles from './animate.css?inline';

interface Store {
  isIntersecting: boolean;
}

export const Animate = component$(({ animationOptions, class: classProp }: { animationOptions: string, class?: string }) => {
  useStyles$(animateStyles);

  const store = useStore<Store>({ isIntersecting: false });
  const elementId = Math.random().toString(36).substr(2, 9);

  useVisibleTask$(({ track, cleanup }) => {
    track(() => store.isIntersecting);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.target.getAttribute('qwik-animate-id') === elementId) {
            if (store.isIntersecting !== entry.isIntersecting) {
              store.isIntersecting = entry.isIntersecting;
              // Testing purpose
              console.log(`Component with ${animationOptions} is in view:`, entry.isIntersecting);
            }
          }
        });
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    const targetElement = document.querySelector(`[qwik-animate-id='${elementId}']`);
    if (targetElement) {
      observer.observe(targetElement);
    }

    cleanup(() => observer.disconnect());
  });

  return (
    <div
      qwik-animate-id={elementId}
      class={classProp}
      animation-options={animationOptions}
      qwik-animate={store.isIntersecting ? animationOptions : undefined}
    >
      <Slot />
    </div>
  );
});
