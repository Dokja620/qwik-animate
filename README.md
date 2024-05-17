
![Logo](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/th5xamgrr6se0x5ro4g6.png)

# Qwik Animate 🎨✨
Introducing QwikAnimate: 🌟 the ultimate Animated on Scroll library for QwikJS! With a vast array of animations, it seamlessly integrates with QwikJS, enabling effortless creation of captivating scroll-triggered effects. 💫


This component allows you to specify animation options, CSS classes, and whether the animation should run only once. It utilizes the `useVisibleTask$` hook to observe the visibility of the component in the viewport and triggers animations accordingly.

## Installation 👀

Install my-project with npm

```bash
  cd my-project
  
  npm install @dokja620/qwik-animate

```
    ## Animation

You can choose animations from our CSS animation library at `css.animation.qwik` or use your own custom animations by defining keyframes and other properties using the `qwik-animate` attribute.

To use your own custom animation, follow these steps:

1. Define the keyframes for your animation in CSS:

```css
[qwik-animate*="whatever"]{
    animation: myCustomAnimation 1s ease-out forwards;
    animation-delay: 0.5s;
}
@keyframes myCustomAnimation {
  0% {
    transform: translateY(50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
```

2. In your JSX, use the `Animate` component and specify the CSS class for the element. For the `animationOptions` prop, target the `qwik-animate` attribute in your CSS and provide the necessary animation properties:

```tsx
import { Animate } from "~/components/qwik-animate/animate";

export default function MyComponent() {
  return (
    <>
      <Animate
        class="div"
        animationOptions="whatever"
      >
        <!-- Your content here -->
      </Animate>
    </>
  );
}
```

In this example, the `div` element will be animated with the `myCustomAnimation` keyframes when it comes into view during scrolling. The animation will have a duration of 1 second, an ease-out timing function, and a delay of 0.5 seconds.
## Usage 🙃
### default
The animation to run whenever the element comes into view:

```tsx
    import { Animate } from "~/components/qwik-animate/animate";

    export default function MyComponent() {
    return (
        <>
            <Animate class="div" animationOptions="@from-library">
                <!-- Your content here -->
            </Animate>
        </>
    );
    }

```

### Using Animate with runOnce
If you want the animation to run only once:

```tsx
import { Animate } from "~/components/qwik-animate/animate";

    export default function MyComponent() {
    return (
        <>
            <Animate class="div" animationOptions="@from-library" runOnce>
                <!-- Your content here -->
            </Animate>
        </>
    );
}
```

In both examples, you can use the Animate component multiple times within a single component to apply animations as needed.
# Credits
👏 Credit is due to @w4u-public/A.css for creating an exceptionally comprehensive CSS animation generator. His remarkable work, crafted single-handedly, deserves wider recognition for its innovation and utility.

## License

[MIT](https://choosealicense.com/licenses/mit/)

