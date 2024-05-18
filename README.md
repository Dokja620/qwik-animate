<br>
  <p align="center">
    <img alt="Qwik Logo" width="250" src="https://github.com/Dokja620/qwik-animate/raw/master/logo.webp" />
  </p>
<br>

---
Introducing **QwikAnimate**: 🌟 An animated on-scroll library for QwikJS! With a vast array of animations, it seamlessly integrates with QwikJS, enabling effortless creation of captivating scroll-triggered effects. 💫

## Features
- **Run Once**: Ensure animations run only once when the element first comes into view.
- **Debug Mode**: Enable console logs for debugging purposes.
- **Animation Preset File**: Includes `animate.css` with a variety of predefined animations.
- **Interactive Playground**: Explore animations in real-time with our interactive playground at [qwikanimate.css](https://qwikanimate.css).

## Installation 👀
Install QwikAnimate in your project using npm:

```sh
cd my-project

npm install @dokja620/qwik-animate
```

## Usage Example
Here's a basic example to get you started with QwikAnimate:

### Example Usage in a component
In the Qwik component where you want to use the `Animate` component, import it and use it as shown below:

```tsx
import { Animate } from "~/components/qwik-animate/animate";

export default function MyComponent() {
  return (
    <>
      <Animate class="div" animationOptions="*whatever*">
        <!-- Your content here -->
      </Animate>
    </>
  );
}
```

### Run Once
The `runOnce` prop ensures that the animation runs only once when the element first comes into view.

```tsx
<Animate class="div" animationOptions="@sc-in_child-ascend @bn @rt-z" runOnce>
  <!-- Your content here -->
</Animate>
```

### Debug Mode
The `debug` prop allows you to enable console logs for debugging purposes.

```tsx
<Animate class="div" animationOptions="@sc-in_child-ascend @bn @rt-y" debug>
  <!-- Your content here -->
</Animate>
```
Got it, let's trim it down further:

---

## animate.css: Elevate Your Animations

With animate.css, Qwik Animate brings a powerhouse of animation possibilities to your fingertips:

### Seamless Chaining

Blend animations effortlessly for captivating effects that keep your audience engaged.

### Infinite Creativity

Experiment with a variety of animations to craft the perfect visual narrative for your content.

### Interactive Playground

Explore animations in real-time with our interactive playground at [qwikanimate.css](https://qwikanimate.css).

### Embrace Innovation

Join us in embracing innovation to create immersive user experiences.

### Start Your Journey

Elevate your animations with animate.css and Qwik Animate. Explore now!

## Credits
👏 Credit is due to @w4u-public/A.css for creating an exceptionally comprehensive CSS animation generator. His remarkable work, crafted single-handedly, deserves wider recognition for its innovation and utility.

## License
[MIT](https://choosealicense.com/licenses/mit/)