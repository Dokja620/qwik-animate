import { component$, Slot, useStyles$, useStore, useVisibleTask$ } from '@builder.io/qwik';
import animateStyles from './animate.css?inline';

export const Animate = component$(({ optionAttribute, class: classProp }: { optionAttribute: string, class?: string }) => {
  useStyles$(animateStyles);

  const store = useStore<{ isIntersecting: boolean }>({ isIntersecting: false });

  useVisibleTask$(({ track, cleanup }) => {
    track(() => store.isIntersecting);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.target.getAttribute('option-attribute') === optionAttribute) {
            store.isIntersecting = entry.isIntersecting;
            // Testing purpose
            console.log(`Component with ${optionAttribute} is in view:`, entry.isIntersecting);
          }
        });
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    const targetElement = document.querySelector(`div[option-attribute='${optionAttribute}']`);
    if (targetElement) {
      observer.observe(targetElement);
    }

    cleanup(() => observer.disconnect());
  });

  return (
    <div
      class={classProp}
      option-attribute={optionAttribute}
      qwik-animate={store.isIntersecting ? optionAttribute : undefined}
    >
      <Slot />
    </div>
  );
});
