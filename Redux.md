# Redux Challenges
Redux is a predictable state container for JavaScript apps. It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. While you can use Redux with any view library, it's introduced here before being combined with React.

## Create a Redux Store
Redux is a state management framework that can be used with a number of different web technologies, including React.

In Redux, there is a single state object that's responsible for the entire state of your application. This means if you had a React app with ten components, and each component had its own local state, the entire state of your app would be defined by a single state object housed in the Redux `store`. This is the first important principle to understand when learning Redux: the Redux store is the single source of truth when it comes to application state.

This also means that any time any piece of your app wants to update state, it **must** do so through the Redux store. The unidirectional data flow makes it easier to track state management in your app.

## Get State from the Redux Store
The Redux store object provides several methods that allow you to interact with it. For example, you can retrieve the current `state` held in the Redux store object with the `getState()` method.

### Define a Redux Action
Since Redux is a state management framework, updating state is one of its core tasks. In Redux, all state updates are triggered by dispatching actions. An action is simply a JavaScript object that contains information about an action event that has occurred. The Redux store receives these action objects, then updates its state accordingly. Sometimes a Redux action also carries some data. For example, the action carries a username after a user logs in. While the data is optional, actions must carry a `type` property that specifies the 'type' of `action` that occurred.

Think of Redux actions as messengers that deliver information about events happening in your app to the Redux store. The store then conducts the business of updating state based on the action that occurred.

### Define an Action Creator
After creating an action, the next step is sending the action to the Redux store so it can update its state. In Redux, you define action creators to accomplish this. An action creator is simply a JavaScript function that returns an action. In other words, action creators create objects that represent action events.

### Dispatch an Action Event
`dispatch` method is what you use to dispatch actions to the Redux store. Calling `store.dispatch()` and passing the value returned from an action creator sends an action back to the store.

Recall that action creators return an object with a type property that specifies the action that has occurred. Then the method dispatches an action object to the Redux store. Based on the previous challenge's example, the following lines are equivalent, and both dispatch the action of type LOGIN:
```
store.dispatch(actionCreator());
store.dispatch({ type: 'LOGIN' });
```

### Handle and Action in the Store
After an action is created and dispatched, the Redux store needs to know how to respond to that action. This is the job of a `reducer` function. Reducers in Redux are responsible for the state modifications that take place in response to actions. A `reducer` takes `state` and `action` as arguments, and it always returns a new `state`. It is important to see that this is the **only** role of the reducer. It has no side effects — it never calls an API endpoint and it never has any hidden surprises. The reducer is simply a pure function that takes state and action, then returns new state.

Another key principle in Redux is that `state` is read-only. In other words, the `reducer` function must **always** return a new copy of `state` and never modify state directly. Redux does not enforce state immutability, however, you are responsible for enforcing it in the code of your reducer functions.

### Use a Switch Statement to Handle Multiple Accounts
- You can tell the Redux store how to handle multiple action types.
- Say you are managing user authentication in your Redux store.
  - You want to have a state representation for when users are logged in and
  - when they are logged out.
  - You represent this with a single state object with the property `authenticated`.
- You also need action creators that create actions corresponding to user login and user logout, along with the action objects themselves.


### Use `const` for Action Types
- assign action types as read-only constants, then reference these constants wherever they are used.
- refactor the code you're working with to write the action types as `const` declarations.
- It's generally a convention to write constants in all UPPERCASE, and this is standard practice in Redux as well

### Register a Store Listener
- Another method you have access to on the Redux store object is `store.subscribe()`. - This allows you to subscribe listener functions to the store, which are called whenever an action is dispatched against the store.
- One simple use for this method is to subscribe a function to your store that simply logs a message every time an action is received and the store is updated.

### Combine Multiple Reducers
- Redux provides reducer composition as a solution for a complex state model.
  - You define multiple reducers to handle different pieces of your application's state, then compose these reducers together into one root reducer.
  - The root reducer is then passed into the Redux `createStore()` method.
- In order to let us combine multiple reducers together, Redux provides the `combineReducers()` method.
  - This method accepts an object as an argument in which you define properties which associate keys to specific reducer functions.
  - The name you give to the keys will be used by Redux as the name for the associated piece of state.
- Typically, it is a good practice to create a reducer for each piece of application state when they are distinct or unique in some way.
  - For example, in a note-taking app with user authentication, one reducer could handle authentication while another handles the text and notes that the user is submitting.
  - For such an application, we might write the combineReducers() method like this:
```
const rootReducer = Redux.combineReducers({
  auth: authenticationReducer,
  notes: notesReducer
});
```
  - Now, the key `notes` will contain all of the state associated with our notes and handled by our `notesReducer`.
  - This is how multiple reducers can be composed to manage more complex application state.
  - In this example, the state held in the Redux store would then be a single object containing `auth` and `notes` properties.


### Send Action Data to the Store
- By now you've learned how to dispatch actions to the Redux store, but so far these actions have not contained any information other than a `type`.
- You can also send specific data along with your actions.
- In fact, this is very common because actions usually originate from some user interaction and tend to carry some data with them.
- The Redux store often needs to know about this data.

### Use Middleware to Handle Asynchronous Actions
So far these challenges have avoided discussing asynchronous actions, but they are an unavoidable part of web development. At some point you'll need to call asynchronous endpoints in your Redux app, so how do you handle these types of requests? Redux provides middleware designed specifically for this purpose, called Redux Thunk middleware. Here's a brief description how to use this with Redux.

To include Redux Thunk middleware, you pass it as an argument to Redux.applyMiddleware(). This statement is then provided as a second optional parameter to the createStore() function. Take a look at the code at the bottom of the editor to see this. Then, to create an asynchronous action, you return a function in the action creator that takes dispatch as an argument. Within this function, you can dispatch actions and perform asynchronous requests.

In this example, an asynchronous request is simulated with a setTimeout() call. It's common to dispatch an action before initiating any asynchronous behavior so that your application state knows that some data is being requested (this state could display a loading icon, for instance). Then, once you receive the data, you dispatch another action which carries the data as a payload along with information that the action is completed.

Remember that you're passing dispatch as a parameter to this special action creator. This is what you'll use to dispatch your actions, you simply pass the action directly to dispatch and the middleware takes care of the rest.
