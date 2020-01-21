{/* 1. Create a simple JSX element */}

const JSX = <h1>Hello JSX!</h1>


{/* 2. Create a Complex JSX Element */}

const JSX =
  <div>
    <h1>Bidol-Lee</h1>
    <p>We live in Ridgewood</p>
    <ul>
      <li>Omi</li>
      <li>SungOh</li>
      <li>Oscar</li>
    </ul>
  </div>


{/* 3. Add Comments in JSX */}

const JSX = (
  <div>
    <h1>This is a block of JSX</h1>
    {/* Desirable Difficulties */}
    <p>Here's a subtitle</p>
  </div>
);


{/* 4. Render HTML Elements to the DOM */}

const JSX = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);

ReactDOM.render(JSX, document.getElementById('challenge-node'))


{/* 5. Define an HTML Class in JSX */}

const JSX = (
  <div className='myDiv'>
    <h1>Add a class to this div</h1>
  </div>
);


{/* 6. Learn About Self-Closing JSX Tags */}

const JSX = (
  <div>
    <h2>Welcome to React!</h2> <br />
    <p>Be sure to close all tags!</p>
    <hr />
  </div>
);


{/* 7. Create a Stateless Functional Component */}

const MyComponent = function() {
  return (
    <div>You shall not pass!</div>
  )
}


{/* 8. Create React Component */}

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Hello React!</h1>
      </div>
    )
  }
};


{/* 9. Create a Component with Composition */}

const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        <ChildComponent />
      </div>
    );
  }
};


{/* 10. Use React to Render Nested Components */}

const TypesOfFruit = () => {
  return (
    <div>
      <h2>Fruits:</h2>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
};

const Fruits = () => {
  return (
    <div>
      <TypesOfFruit />
    </div>
  );
};

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        <Fruits />
      </div>
    );
  }
};


{/* 11. Compose React Components */}

class Fruits extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Fruits:</h2>
        <NonCitrus />
        <Citrus />
      </div>
    );
  }
};

class TypesOfFood extends React.Component {
  constructor(props) {
     super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        <Fruits />
        <Vegetables />
      </div>
    );
  }
};

{/* 12. Render a Class Component to the DOM */}

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        <Fruits />
        <Vegetables />
      </div>
    );
  }
};

ReactDOM.render(<TypesOfFood />, document.getElementById('challenge-node'));


{/* 13. Write a React Component from Scratch */}

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>My First React Component!</h1>
      </div>
    );
  }
};

ReactDOM.render(<MyComponent />, document.getElementById('challenge-node'));


{/* 14. Pass Props to a Stateless Functional Component */}

const CurrentDate = (props) => {
  return (
    <div>
      <p>The current date is: {props.date}</p>
    </div>
  );
};

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>What date is it?</h3>
        <CurrentDate date={Date()}/>
      </div>
    );
  }
};


{/* 15. Pass an Array as Props */}

const List = (props) => {
  return <p>{props.tasks.join(', ')}</p>
};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        <List tasks={['code', 'network', 'manifest']}/>
        <h2>Tomorrow</h2>
        <List tasks={['meditate', 'strength train', 'manifest']}/>
      </div>
    );
  }
};


{/* 16. Use Default Props */}

const ShoppingCart = (props) => {
  return (
    <div>
      <h1>Shopping Cart Component</h1>
    </div>
  )
};

ShoppingCart.defaultProps = { items: 0 };


{/* 17. Override Default Props */}

const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
}

Items.defaultProps = {
  quantity: 0
}

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Items quantity={10} />
  }
};


{/* 18. Use PropTypes to Define the Props You Expect */}

const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
};

// change code below this line
Items.propTypes = { quantity: PropTypes.number.isRequired }
// change code above this line

Items.defaultProps = {
  quantity: 0
};

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Items />
  }
};


{/* 19. Access Props Using this.props */}

class ReturnTempPassword extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
            <p>Your temporary password is: <strong>{this.props.tempPassword}</strong></p>
        </div>
    );
  }
};

class ResetPassword extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
          <h2>Reset Password</h2>
          <h3>We've generated a new temporary password for you.</h3>
          <h3>Please reset this password from your account settings ASAP.</h3>
          <ReturnTempPassword tempPassword = {'Instantaneous Combustion'} />
        </div>
    );
  }
};


{/* 20. Review Using Props with Stateless Functional Components */}

class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Camper/>
      </div>
    );
  }
};
// change code below this line

// const Camper = (props) => {
//   return <p>{props.name}</p>
// };

const Camper = props => <p>{props.name}</p>

Camper.defaultProps = {
  name: 'CamperBot'
};

Camper.propTypes = {
   name: PropTypes.string.isRequired
};


{/* 21. Create a Stateful Component */}

class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    // initialize state here
    this.state = {
      name: 'Omi'
    }

  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};


{/* 22. Render State in the User Interface */}

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    return (
      <div>
        { /* change code below this line */ }
        <h1>{this.state.name}</h1>
        { /* change code above this line */ }
      </div>
    );
  }
};


{/* 23. Render State in the User Interface Another Way */}

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    // change code below this line
    const name = this.state.name;
    // change code above this line
    return (
      <div>
        { /* change code below this line */ }
        <h1>{name}</h1>
        { /* change code above this line */ }
      </div>
    );
  }
};


{/* 24. Set State with this.setState */}

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Initial State'
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    // change code below this line
    this.setState({
      name: 'React Rocks!'
    });
    // change code above this line
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};


{/* 25. Bind 'this' to a Class Method */}

class MyComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: 'Hello'
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      text: 'You clicked!'
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.text}</h1>
      </div>
    );
  }
};


{/* 26. Use State to Toggle an Element */}

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    // change code below this line
    this.toggleVisibility = this.toggleVisibility.bind(this);
    // change code above this line
  }
  // change code below this line
  toggleVisibility() {
    this.setState(state => ({
      visibility: !state.visibility
    }));
  }
  // change code above this line
  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
        </div>
      );
    }
  }
};


{/* 27. Write a Simple Counter */}

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    // change code below this line
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
    // change code above this line
  }
  // change code below this line
  increment() {
    this.setState(state => ({
      count: state.count + 1
    }))
  }

  decrement() {
    this.setState(state => ({
      count: state.count - 1
    }))
  }

  reset() {
    this.setState({
      count: 0
    });
  }

  // change code above this line
  render() {
    return (
      <div>
        <button className='inc' onClick={this.increment}>Increment!</button>
        <button className='dec' onClick={this.decrement}>Decrement!</button>
        <button className='reset' onClick={this.reset}>Reset</button>
        <h1>Current Count: {this.state.count}</h1>
      </div>
    );
  }
};


{/* 28. Create a Controlled Input */}

class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    // change code below this line
    this.handleChange = this.handleChange.bind(this);
    // change code above this line
  }
  // change code below this line
  handleChange(event) {
    this.setState(state => ({
      input: event.target.value
    }))
  }

  // change code above this line
  render() {
    return (
      <div>
        { /* change code below this line */}
        <input value={this.state.input} onChange={this.handleChange}/>
        { /* change code above this line */}
        <h4>Controlled Input:</h4>
        <p>{this.state.input}</p>
      </div>
    );
  }
};


{/* 29. Create a Controlled Form */}

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submit: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault()
    this.setState({
      submit: this.state.input
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.input}
            onChange={this.handleChange}/>
          <button type='submit'>Submit!</button>
        </form>
          <h1>{this.state.submit}</h1>
      </div>
    );
  }
};


{/* 30. Pass State as Props to Child Components */}

class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'CamperBot'
    }
  }
  render() {
    return (
       <div>
       {/* call this.state.name in order to pass the value of CamperBot to the Navbar component*/}
         <Navbar name={this.state.name} />
       </div>
    );
  }
};

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div>
      {/* Since we passed in the CamperBot state value into the the NavBar
        component above, the h1 element below will render the value passed
        from state */}
      <h1>Hello, my name is: {this.props.name} </h1>
    </div>
    );
  }
};


{/* 31. Pass a Callback as Props */}

class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }
  render() {
    return (
       <div>
        { /* change code below this line */ }
        <GetInput
          input={this.state.inputValue}
          handleChange={this.handleChange}
        />
        <RenderInput input={this.state.inputValue} />
        { /* change code above this line */ }
       </div>
    );
  }
};

class GetInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Get Input:</h3>
        <input
          value={this.props.input}
          onChange={this.props.handleChange}/>
      </div>
    );
  }
};

class RenderInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Input Render:</h3>
        <p>{this.props.input}</p>
      </div>
    );
  }
};


{/* 32. Use the Lifecycle Method componentWillMount */}

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    // change code below this line
    console.log('I am ready for my potato pancakes');
    // change code above this line
  }
  render() {
    return <div />
  }
};


{/* 33. Use the Lifecycle Method componentDidMount */}

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUsers: null
    };
  }
  componentDidMount() {
    setTimeout( () => {
      this.setState({
        activeUsers: 1273
      });
    }, 2500);
  }
  render() {
    return (
      <div>
        <h1>Active Users: {this.state.activeUsers}</h1>
      </div>
    );
  }
};


{/* 34. Add Event Listeners */}

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
    this.handleEnter = this.handleEnter.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  // change code below this line
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  // change code above this line
  handleEnter() {
    this.setState({
      message: this.state.message + 'You pressed the enter key! '
    });
  }

  handleKeyPress(event) {
    if (event.keyCode === 13) {
      this.handleEnter();
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
};


{/* 35. Optimize Re-Renders with shouldComponentUpdate */}

class OnlyEvens extends React.Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('Should I update?');
     // change code below this line
     if (nextProps.value % 2 === 0) {
         return true;
     }
     // change code above this line
  }
  componentDidUpdate() {
    console.log('Component re-rendered.');
  }
  render() {
    return <h1>{this.props.value}</h1>
  }
};

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
    this.addValue = this.addValue.bind(this);
  }
  addValue() {
    this.setState({
      value: this.state.value + 1
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.addValue}>Add</button>
        <OnlyEvens value={this.state.value}/>
      </div>
    );
  }
};


{/* 36. Introducing Inline Styles */}

class Colorful extends React.Component {
  render() {
    return (
      {/* add a style attribute to the div to give the text a color of red and font size of 72px; the px units are optional (but I would use them)*/}
      <div style={{color: "red", fontSize: "72px"}}>Big Red</div>
    );
  }
};
