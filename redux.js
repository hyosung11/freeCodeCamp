// 1. Create a Redux Store

const reducer = (state = 5) => {
  return state;
}

// Redux methods are available from a Redux object
// For example: Redux.createStore()
// Define the store here:
const store = Redux.createStore(reducer);


// 2. Get State from the Redux Store

const store = Redux.createStore(
  (state = 5) => state
);

// change code below this line
const currentState = store.getState();


// 3. Define a Redux Action

const action = {
  type: 'LOGIN'
}


// 4. Define an Action Creator

const action = {
  type: 'LOGIN'
}

// Define an action creator here:
function actionCreator() {
  return action;
}


// 5. Dispatch an Action Event

const store = Redux.createStore(
  (state = {login: false})
);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};

// Dispatch action here:
store.dispatch(loginAction());


// 6. Handle an Action in the Store

const defaultState = {
  login: false
};

const reducer = (state = defaultState, action) => {
  if (action.type === 'LOGIN') {
    return {
      login: true;
    };
  } else {
    return state;
  }
}

const store = Redux.createStore(reducer);

const loginAction() = () => {
  return {
    type: 'LOGIN'
  }
};
