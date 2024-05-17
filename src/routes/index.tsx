import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Animate } from "~/components/qwik-animate/animate";

export default component$(() => {
  return (
    <>
      <section>
        <Animate class="div" animationOptions="@sc-in_child-ascend @bn @rt-z" runOnce>
          <h1>Hi 👋</h1>
          <div>
            Can't wait to see what you build with qwik!
            <br />
            Happy coding.
          </div>
          <div class="list">
            <h1>A</h1>
            <h1>B</h1>
            <h1>C</h1>
            <h1>D</h1>
            <h1>E</h1>
            <h1>F</h1>
            <h1>G</h1>
            <h1>H</h1>
            <h1>I</h1>
            <h1>J</h1>
            <h1>K</h1>
            <h1>L</h1>
          </div>
        </Animate>
      </section>
      <section></section>
      <section>
        <Animate class="div" animationOptions="@sc-in_child-ascend @bn @rt-y">
          <h1>Hi 👋</h1>
          <div>
            Can't wait to see what you build with qwik!
            <br />
            Happy coding.
          </div>
          <div class="list">
            <h1>A</h1>
            <h1>B</h1>
            <h1>C</h1>
            <h1>D</h1>
            <h1>E</h1>
            <h1>F</h1>
            <h1>G</h1>
            <h1>H</h1>
            <h1>I</h1>
            <h1>J</h1>
            <h1>K</h1>
            <h1>L</h1>
          </div>
        </Animate>
      </section>
    </>
  );
});

export const head: DocumentHead = {
  title: "Qwik Animate",
  meta: [
    {
      name: "description",
      content: "Animated on Scroll library for QwikJS! With a vast array of animations, it seamlessly integrates with QwikJS, enabling effortless creation of captivating scroll-triggered effects.",
    },
  ],
};
