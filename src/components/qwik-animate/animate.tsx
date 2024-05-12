import { component$, Slot, useStyles$, useStore, useVisibleTask$ } from '@builder.io/qwik';
import animateStyles from './animate.css?inline';

export const Animate = component$(({ optionAttribute, class: classProp }: { optionAttribute: string, class?: string }) => {
  useStyles$(animateStyles);

  const isInView = useStore({ inView: false });

  useVisibleTask$(({ track, cleanup }) => {
  track(() => isInView.inView);

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isInView.inView = true;
        console.log('Component is in view:', optionAttribute);
      } else {
        isInView.inView = false;
        console.log('Component is not in view:', optionAttribute);
      }
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
      qwik-animate={isInView.inView ? optionAttribute : undefined}
    >
      <Slot />
    </div>
  );
});