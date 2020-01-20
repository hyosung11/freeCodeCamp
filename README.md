# [freeCodeCamp](https://www.freecodecamp.org/)
Code and Notes from freeCodeCamp

## [React](https://reactjs.org/) Challenges
- open-source JS view library for building user interfaces
- used to create
  - components
  - handle state and props
  - utilize event listeners and
  - certain life cycle methods to update data as it changes

### JSX is a syntax extension of JS that allows you to write HTML directly with JS.
  - `{ 'this is treated as JavaScript code' }`
  - **Babel**: a popular tool to compile JSX code into JavaScript
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

### Components
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

### Props
  - In React you can pass props, or properties, to child components.
  - Use **custom HTML attributes** created by you and supported by React to be passed to the component.
    - `const Welcome = (props) => <h1>Hello, {props.user}!</h1>`
  - to pass an array to a JSX element, it must be treated as JavaScript and wrapped in curly braces.
    - `const ChildComponent = (props) => <p>{props.colors.join(', ')}</p>`
  - default props
    - `MyComponent.defaultProps = { location: 'San Francisco' }`
  - override default props by explicitly setting the prop values for a component.

- PropTypes
  - useful type-checking feature
  - e.g., set `propTypes` on your component to require data to be of type `array`
  - best practice to set `propTypes` when you know the type of prop ahead of time.
  - `MyComponent.propTypes = { handleClick: PropTypes.func.isRequired }`
  - Note: As of React v15.5.0, `PropTypes` is imported independently from React, like this: `import PropTypes from 'prop-types'`;

- Access Props Using `this.props`
  - anytime you refer to a class component within itself, you use the `this` keyword.
  - e.g., if an ES6 class component has a prop called data: `{this.props.data}` in JSX.

### Props and Components
  - a **stateless functional component** is any function you write which accepts props and returns JSX.
  - a **stateless component**, on the other hand, is a class that extends `React.Component`, but does not use internal state.
  - a **stateful component** is a class component that does maintain its own internal state. (referred to as simply components or React components)
  - to contain state management, minimize statefulness by creating stateless functional components wherever possible; this improves development and maintenance of your app by making it easier to follow how changes to state affect its behavior

- Create a Stateful Component
  - State consists of any data your app needs to know about that can change over time.
  - create state in a React component by declaring a `state` property on the component class in its `constructor`
    ```
    this.state = {
      // describe your state here
    }
    ```

### Render State in the User Interface
  - State is one of the most powerful features of components in React.
  - It allows you to track important data in your app and render a UI in response to changes in this data.
  - If your data changes, your UI will change.
  - React uses what is called a virtual DOM, to keep track of changes behind the scenes.
  - When state data updates, it triggers a re-render of the components using that data - including child components that received the data as a prop.
  - Note that if you make a component stateful, no other components are aware of its state.
  - Its state is completely encapsulated, or local to that component, unless you pass state data to a child component as props.
  - This notion of encapsulated state is very important because it allows you to write certain logic, then have that logic contained and isolated in one place in your code.

### Render State in the `render()` method before the `return`
  - For example, you could declare functions, access data from state or props, perform computations on this data, and so on.
  - Then, you can assign any data to variables, which you have access to in the `return` statement.

- `this.setState`
  - React provides a method for updating component `state` called `setState`.
  - call the `setState` method within your component class like so: t`his.setState()`, passing in an object with key-value pairs.
  - The keys are your state properties and the values are the updated state data.
  - React expects you to never modify state directly, instead always use `this.setState()` when state changes occur.
  - state updates through the `setState` method can be **asynchronous**.

- Bind `this` to a Class Method
  - A class method typically needs to use the `this` keyword so it can access properties on the class (such as `state` and `props`) inside the scope of the method.
  - One common way is to explicitly bind `this` in the constructor so `this` becomes bound to the class methods when the component is initialized.
    - e.g., `this.handleClick = this.handleClick.bind(this)`
  - Then, when you call a function like `this.setState()` within your class method, this refers to the class and will not be `undefined`.

- Use State to Toggle an Element
  - Sometimes you might need to know the previous state when updating the state.
  - However, state updates may be asynchronous - this means React may batch multiple `setState()` calls into a single update.
  - This means you can't rely on the previous value of `this.state` or `this.props` when calculating the next value.

 ```
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));
```

### Create a Controlled Input
  - Your application may have more complex interactions between state and the rendered UI.
  - For example, form control elements for text input, such as `input` and `textarea`, maintain their own state in the DOM as the user types.
  - With React, you can move this mutable state into a React component's `state`.
  - The user's input becomes part of the application `state`, so React controls the value of that input field.
  - Typically, if you have React components with input fields the user can type into, it will be a controlled input form.
