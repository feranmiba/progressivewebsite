# Progressive-shapes

**progressive-shapes** is a free, open-source React component library designed to provide simple, customizable, and accessible progress indicators for your projects. Built by developers for developers, it aims to make displaying progress easy, elegant, and flexible — so you can focus on building great user experiences without reinventing the wheel.

Whether you’re tracking steps in a form, showing task completion, or visualizing any step-based progress, **progressive-shapes** offers lightweight, performant components that fit right into your React app with minimal setup.

---

## Why Use progressive-shapes?

- **Free and Open Source:** Use it without cost or restrictions — built by the community, for the community.
- **Customizable:** Easily tweak colors, sizes, and styles to match your design.
- **Accessible:** Comes with built-in ARIA support for screen readers and assistive tech.
- **Easy to Use:** Simple API designed for fast integration.

---

## Contributions Welcome!

We want to make **progressive-shapes** better with your help! If you’re passionate about adding new progressive shapes, improving accessibility, fixing bugs, or enhancing documentation, please check out our [GIT REPO](https://github.com/feranmiba/progressive-shapes) to learn how to get involved.

Your contributions help create a richer, more versatile library that benefits developers worldwide — and we appreciate every bit of support!

---





## Usage


```tsx
import React from 'react';
import CircularProgress from 'progressive-shapes';

const App = () => {
  return (
    <div>
      {/* Example with default styles */}
      <CircularProgress currentStep={3} totalSteps={5} />

      {/* Example with custom radius, stroke, and colors */}
      <CircularProgress
        currentStep={2}
        totalSteps={8}
        radius={30}
        stroke={8}
        strokeBackgroundColor="#ccc"
        strokeProgressColor="#ff6347"
        className="my-custom-wrapper"
        textClassName="my-custom-text"
      />
    </div>
  );
};

export default App;
```


## Installation

```bash
npm install progressive-shapes
# or
yarn add progressive-shapes
```

