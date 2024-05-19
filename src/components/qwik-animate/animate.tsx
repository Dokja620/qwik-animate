import { component$, Slot, useStyles$, useStore, useVisibleTask$ } from '@builder.io/qwik';
import animateStyles from './animate.css?inline';

interface Store {
  isIntersecting: boolean;
  hasAnimated: boolean; // Track if the animation has run at least once
}

export const Animate = component$(({ animationKeys, class: classProp, runOnce = false, debug = false, threshold = "0.5, 0.5" }: { animationKeys: string, class?: string, runOnce?: boolean, debug?: boolean, threshold?: string }) => {
  useStyles$(animateStyles);

  const store = useStore<Store>({ isIntersecting: false, hasAnimated: false });
  const elementId = Math.random().toString(36).substr(2, 9);

  // Parse threshold prop
  const [showThreshold, hideThreshold] = threshold.split(',').map(t => parseFloat(t.trim()));

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(({ track, cleanup }) => {
    track(() => store.isIntersecting);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.target.getAttribute('qwik-animate-id') === elementId) {
            if (store.isIntersecting !== entry.isIntersecting) {
              const isIntersecting = entry.intersectionRatio >= showThreshold;
              const isHidden = entry.intersectionRatio < hideThreshold;
              
              if (store.isIntersecting !== isIntersecting) {
                store.isIntersecting = isIntersecting;

                if (debug) {
                  console.log(`Animate component "${elementId}" is in view:`, isIntersecting);
                }

                if (isIntersecting) {
                  store.hasAnimated = true;
                }
              } else if (store.isIntersecting && isHidden) {
                store.isIntersecting = false;
              }
            }
          }
        });
      },
      { threshold: [showThreshold, hideThreshold] }
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
      animation-keys={animationKeys}
      qwik-animate={store.isIntersecting || (runOnce && store.hasAnimated) ? animationKeys : undefined}
    >
      <Slot />
    </div>
  );
});
