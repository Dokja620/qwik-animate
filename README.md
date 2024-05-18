# Qwik Animate 🎨✨
Introducing **QwikAnimate**: 🌟 An animated on-scroll library for QwikJS! With a vast array of animations, it seamlessly integrates with QwikJS, enabling effortless creation of captivating scroll-triggered effects. 💫

## Features
- **Run Once**: Ensure animations run only once when the element first comes into view.
- **Debug Mode**: Enable console logs for debugging purposes.
- **Animation Preset File**: Includes `animate.css` with a variety of predefined animations.

## Installation 👀
Install QwikAnimate in your project using npm:

```sh
cd my-project
npm install @dokja620/qwik-animate
```

## Usage Example
Here's a basic example to get you started with QwikAnimate:

### Example Usage in a Page
In the Qwik page where you want to use the `Animate` component, import it and use it as shown below:

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

```typescript
<Animate class="div" animationOptions="@sc-in_child-ascend @bn @rt-z" runOnce>
  <!-- Your content here -->
</Animate>
```

### Debug Mode
The `debug` prop allows you to enable console logs for debugging purposes.

```typescript
<Animate class="div" animationOptions="@sc-in_child-ascend @bn @rt-y" debug>
  <!-- Your content here -->
</Animate>
```

## Animation Preset File
Qwik Animate comes with `animate.css`, an animation preset file that includes a variety of predefined animations. This file makes it easy to apply animations without having to define them manually.

## Testing Animations
To test the animations, you can use our animation playground at [qwikanimate.css](https://qwikanimate.css). The playground allows you to experiment with different animations and see how they will look in your application.

## Credits
👏 Credit is due to @w4u-public/A.css for creating an exceptionally comprehensive CSS animation generator. His remarkable work, crafted single-handedly, deserves wider recognition for its innovation and utility.

## License
[MIT](https://choosealicense.com/licenses/mit/)