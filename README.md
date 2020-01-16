# freeCodeCamp
Code and Notes from freeCodeCamp

## [React](https://reactjs.org/) Challenges
- open-source JS view library for building user interfaces
- used to create
  - components
  - handle state and props
  - utilize event listeners and
  - certain life cycle methods to update data as it changes

- JSX is a syntax extension of JS that allows you to write HTML directly with JS.
  - `{ 'this is treated as JavaScript code' }`
  - Babel: a popular tool to compile JSX code into JavaScript
  - nested JSX must return a **single** element

- Comments in JSX
  - `{/* comment */}`

- Render HTML Elements to the DOM
  - React's rendering API is known as ReactDOM
  - `ReactDOM.render(componentToRender, targetNode)`

- Naming in JSX
  - since `class` is a reserved word in JavaScript, JSX uses `className`
  - camelCase naming convention
    - `onClick` not `onclick`
    - `onChange` not `onchange`

- Self-Closing JSX Tags
  - any JSX element can be written with a self-closing tag and every element must be closed.
  - e.g., `<br />` never `<br>` as in plain HTML
  - A `<div>`, on the other hand, can be written as `<div />` or `<div></div>`.
    - The difference is that in the first syntax version there is no way to include anything in the `<div />`.

- Components
  - create using a JavaScript function which creates a *stateless functional component*
    - a stateless component can receive and render data but doesn't manage or track changes to that data.
  - React requires function names to begin with a capital letter.
  - create using ES6 `class` syntax
    - class components have access to React features such as local state and lifecycle hooks
    - `constructor(props)` special method used during initialization of objects that are created with the `class` keyword.
    - `super(props)`

- Compose Multiple React Components
  - Parent and children components structure
  - UI in terms of components

- Render a Class Component to the DOM
  - `ReactDOM.render(<ComponentToRender />, targetNode)`

- Props
  - In React you can pass props, or properties, to child components.
  - Use **custom HTML attributes** created by you and supported by React to be passed to the component.
    `const Welcome = (props) => <h1>Hello, {props.user}!</h1>`
