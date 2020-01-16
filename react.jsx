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
