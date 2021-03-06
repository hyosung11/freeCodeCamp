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

### `this.setState`
  - React provides a method for updating component `state` called `setState`.
  - call the `setState` method within your component class like so: t`his.setState()`, passing in an object with key-value pairs.
  - The keys are your state properties and the values are the updated state data.
  - React expects you to never modify state directly, instead always use `this.setState()` when state changes occur.
  - state updates through the `setState` method can be **asynchronous**.

### Bind `this` to a Class Method
  - A class method typically needs to use the `this` keyword so it can access properties on the class (such as `state` and `props`) inside the scope of the method.
  - One common way is to explicitly bind `this` in the constructor so `this` becomes bound to the class methods when the component is initialized.
    - e.g., `this.handleClick = this.handleClick.bind(this)`
  - Then, when you call a function like `this.setState()` within your class method, this refers to the class and will not be `undefined`.

### Use State to Toggle an Element
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

### Pass State as Props to Child Components
- A common pattern is to have a stateful component containing the `state` important to your app, that then renders child components. You want these components to have access to some pieces of that `state`, which are passed in as `props`.
- This pattern illustrates some important paradigms in React.
- The first is *unidirectional data flow*. State flows in one direction down the tree of your application's components, from the stateful parent component to child components.
- The child components only receive the state data they need.
- The second is that complex stateful apps can be broken down into just a few, or maybe a single, stateful component.
- The rest of your components simply receive state from the parent as props, and render a UI from that state.
- It begins to create a separation where state management is handled in one part of code and UI rendering in another.
- This principle of separating state logic from UI logic is one of React's key principles.
- When it's used correctly, it makes the design of complex, stateful applications much easier to manage.

### Pass a Callback as Props
- You can pass `state` as props to child components, but you're not limited to passing data.
- You can also pass handler functions or any method that's defined on a React component to a child component.
- This is how you allow child components to interact with their parent components.
- You pass methods to a child just like a regular prop. It's assigned a name and you have access to that method name under `this.props` in the child component.

### Use the Lifecycle Method `componentWillMount`
- React components have several special methods that provide opportunities to perform actions at specific points in the lifecycle of a component.
- These are called lifecycle methods, or lifecycle hooks, and allow you to catch components at certain points in time.
- This can be before they are rendered, before they update, before they receive props, before they unmount, and so on.
- Here is a list of some of the main lifecycle methods:
  - `componentWillMount()`
  - `componentDidMount()`
  - `shouldComponentUpdate()`
  - `componentDidUpdate()`
  - `componentWillUnmount()`
- Note: The `componentWillMount` Lifecycle method will be deprecated in a future version of 16.X and removed in version 17.

### Use the Lifecycle Method `componentDidMount`
- use to call an API endpoint to retrieve data.
- The best practice with React is to place API calls or any calls to your server in the lifecycle method componentDidMount().
- This method is called after a component is mounted to the DOM.
- Any calls to setState() here will trigger a re-rendering of your component.
- When you call an API in this method, and set your state with the data that the API returns, it will automatically trigger an update once you receive the data.

### Add Event Listeners
- The `componentDidMount()` method is also the best place to attach any event listeners you need to add for specific functionality.
- React provides a synthetic event system which wraps the native event system present in browsers.
- This means that the synthetic event system behaves exactly the same regardless of the user's browser - even if the native events may behave differently between different browsers.
- React's synthetic event system is great to use for most interactions you'll manage on DOM elements.
- However, if you want to attach an event handler to the document or window objects, you have to do this directly.

### Optimize Re-renders with `shouldComponentUpdate`
- by default if any component receives new state or new props, it re-renders itself and all its children.
- But React provides a lifecycle method to call when child components receive new `state` or `props`, and declare specifically if the components should update or not.
- The method is `shouldComponentUpdate()`, and it takes `nextProps` and `nextState` as parameters.
- This method is a useful way to optimize performance.
- For example, the default behavior is that your component re-renders when it receives new `props`, even if the `props` haven't changed.
- use `shouldComponentUpdate()` to prevent this by comparing the props.
- The method must return a boolean value that tells React whether or not to update the component.
- You can compare the current props (`this.props`) to the next props (`nextProps`) to determine if you need to update or not, and return `true` or `false` accordingly.

### Introducing Inline Styles
- To style in React apply a class to your JSX element using the `className` attribute, and apply styles to the class in your stylesheet.
- Another option is to apply inline styles, which are very common in ReactJS development.
- JSX elements use the style attribute set equal to a JavaScript object:
  - `<div style={{color: "yellow", fontSize: 16}}>Mellow Yellow</div>`

### Add Inline Styles in React
- the names of certain CSS style properties use camel case.
- All property value length units (like height, width, and fontSize) are assumed to be in px unless otherwise specified.
- If you want to use em, for example, you wrap the value and the units in quotes, like `{fontSize: "4em"}`.
- Other than the length values that default to px, all other property values should be wrapped in quotes.

### Use Advanced JavaScript in React Render Method
- write JavaScript directly in your render methods, before the return statement, without inserting it inside of curly braces.
- This is because it is not yet within the JSX code.
- When you want to use a variable later in the JSX code inside the return statement, you place the variable name inside curly braces.


### Render with an If-Else Condition
- Another application of using JavaScript to control your rendered view is to tie the elements that are rendered to a condition.
- When the condition is true, one view renders. When it's false, it's a different view.
- You can do this with a standard if/else statement in the render() method of a React component.

### Use && for a More Concise Conditional
- use the && logical operator to perform conditional logic in a concise way.
  - `{condition && <p>markup</p>}`
- include these statements directly in your JSX and string multiple conditions together by writing && after each one.
- This allows you to handle more complex conditional logic in your render() method without repeating a lot of code.

### Use a Ternary Expression for Conditional Rendering
- `if/else` statements can't be inserted directly into JSX code.
- Ternary expressions can be an excellent alternative if you want to implement conditional logic within your JSX.
- `condition ? expressionIfTrue : expressionIfFalse`

### Render Conditionally from Props
-  Using props to conditionally render code is very common with React developers — that is, they use the value of a given prop to automatically make decisions about what to render.

### Change Inline CSS Conditionally Based on Component State
- render CSS conditionally based on the state of a React component.
- check for a condition, and if that condition is met, modify the styles object that's assigned to the JSX elements in the render method.
- When you set a style object based on a condition, you describe how the UI should look as a function of the application's state.
- There is a clear flow of information that only moves in one direction. This is the preferred method when writing applications with React.

### Use `Array.map()` to Dynamically Render Elements
- Conditional rendering is useful, but you may need your components to render an unknown number of elements.
Often in reactive programming, a programmer has no way to know what the state of an application is until runtime, because so much depends on a user's interaction with that program.
- Programmers need to write their code to correctly handle that unknown state ahead of time. Using `Array.map()` in React illustrates this concept.

### Give Sibling Elements a Unique Key Attribute
- When you create an array of elements, each one needs a key attribute set to a unique value.
- React uses these keys to keep track of which items are added, changed, or removed.
- This helps make the re-rendering process more efficient when the list is modified in any way.
- Note: Keys only need to be unique between sibling elements, they don't need to be globally unique in your application.

### Use `Array.filter()` to Dynamically Filter an Array
- filters the contents of an array based on a condition, then returns a new array.
- e.g., `let onlineUsers = users.filter(user => user.online);`

### Render React on the Server with `renderToString`
- there are some use cases where it makes sense to render a React component on the server.
- React provides a renderToString() method you can use for this purpose.
- There are two key reasons why rendering on the server may be used in a real world app.
  - First, without doing this, your React apps would consist of a relatively empty HTML file and a large bundle of JavaScript when it's initially loaded to the browser. This may not be ideal for search engines that are trying to index the content of your pages so people can find you. If you render the initial HTML markup on the server and send this to the client, the initial page load contains all of the page's markup which can be crawled by search engines.
  - Second, this creates a faster initial page load experience because the rendered HTML is smaller than the JavaScript code of the entire app. React will still be able to recognize your app and manage it after the initial load.
