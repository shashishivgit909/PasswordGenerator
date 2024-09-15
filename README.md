# React + Vite


NOte:

1. In JavaScript, functions are first-class objects, and each time a function is defined, it creates a new function object. In the context of React components, this means that every time a component re-renders, all the functions defined inside it are recreated. Even if the logic of the function is identical, the function's reference changes because it's a new function object. So when function passed as props to child component reranders if parent randers so optimization needed .

# State in React:
State Immutability: In React, when you update the state using a setter function (e.g., setState), React compares the previous state and the new state. If the state value has changed (in terms of reference for objects/arrays or value for primitives), it triggers a re-render.
State Reference: When you update state, React internally keeps track of the reference to the state value. If the new state value is the same as the previous value (for primitives) or has the same reference (for objects/arrays), React will not trigger a re-render.

# Functions in React:
Recreation on Every Render: Functions defined inside a component are recreated on every render. Even if the function logic stays the same, the function reference changes because it's a new function object every time the component renders.
Reference Equality: Functions are compared by reference, so each new function instance is considered different from the previous one, leading to potential re-renders if passed as props.

# State is managed by React and is only updated when you explicitly call the setter function. React optimizes re-renders by checking if the new state is different from the old state.
Functions, however, are recreated on every render, resulting in a new reference each time. This can cause unnecessary re-renders if passed as props, which useCallback helps to cotrol unwanted rerander of child compnent..
