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
  { /* change code below this line */ }
  return <p>{props.tasks.join(', ')}</p>
  { /* change code above this line */ }
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
        { /* change code below this line */ }
        <List tasks={['code', 'network', 'manifest']}/>
        <h2>Tomorrow</h2>
        <List tasks={['meditate', 'strength train', 'manifest']}/>
        { /* change code above this line */ }
      </div>
    );
  }
};
