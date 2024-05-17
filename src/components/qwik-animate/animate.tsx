import { component$, Slot, useStyles$, useStore, useVisibleTask$ } from '@builder.io/qwik';
import animateStyles from './animate.css?inline';

export const Animate = component$(({ optionAttribute, class: classProp }: { optionAttribute: string, class?: string }) => {
  useStyles$(animateStyles);

  const store = useStore<{ elements: Record<string, boolean> }>({ elements: {} });

  useVisibleTask$(({ track, cleanup }) => {
    track(() => store.elements);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          const elementId = entry.target.getAttribute('option-attribute');
          if (elementId) {
            if (entry.isIntersecting) {
              if (!store.elements[elementId]) {
                store.elements[elementId] = true;
                console.log('Component is in view:', elementId);
              }
            } else {
              if (store.elements[elementId]) {
                store.elements[elementId] = false;
                console.log('Component is not in view:', elementId);
              }
            }
          }
        });
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    const targetElements = document.querySelectorAll(`div[option-attribute='${optionAttribute}']`);
    targetElements.forEach(targetElement => observer.observe(targetElement));

    cleanup(() => observer.disconnect());
  });

  return (
    <div
      class={classProp}
      option-attribute={optionAttribute}
      qwik-animate={store.elements[optionAttribute] ? optionAttribute : undefined}
    >
      <Slot />
    </div>
  );
});
