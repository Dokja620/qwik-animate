import { component$, Slot, useStyles$, useStore, useVisibleTask$ } from '@builder.io/qwik';
import animateStyles from './animate.css?inline';

export const Animate = component$(({ optionAttribute, class: classProp }: { optionAttribute: string, class?: string }) => {
  useStyles$(animateStyles);

  const isInView = useStore({ inView: false });

  useVisibleTask$(({ track }) => {
    track(() => isInView.inView);

    // Check if the component is in view and set the flag accordingly
    const observer = new IntersectionObserver(
      ([entry]) => {
        isInView.inView = entry.isIntersecting;
      },
      { threshold: 0.2 } // Adjust the threshold as needed
    );

    const targetElement = document.querySelector(`div[option-attribute="${optionAttribute}"]`);
    if (targetElement) {
      observer.observe(targetElement);
    }

    return () => {
      observer.disconnect();
    };
  });

  return (
    <div class={classProp} option-attribute={optionAttribute} {...(isInView.inView ? { 'qwik-animate': `${optionAttribute}` } : {})}>
      <Slot />
    </div>
  );
});
