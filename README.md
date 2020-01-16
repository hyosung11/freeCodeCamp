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
