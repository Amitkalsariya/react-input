import React, { useState } from 'react';
import './App.css'; // Import your CSS file

function App() {
  const [inputvalue, setInputvalue] = useState('')
  const [text, setText] = useState([])

  let copyData = () => {
    var data = [...text]
    data.push(inputvalue)
    setText(data)
    setInputvalue('')
  }

  const dataDelete = (i) => {
    const data = [...text];
    data.splice(i, 1);
    setText(data);
    setInputvalue('')
  };

  const dataUpdate = (i, el) => {
    const data = [...text];
    data[i] = el;
    setText(data);
    setInputvalue('')
  };

  return (
    <div className="container"> {/* Apply class for centering */}
      <input type="text" className="input-field" placeholder='Enter Value..' value={inputvalue} onChange={(p) => { setInputvalue(p.target.value) }} />
      <button onClick={copyData}>Click Me</button>
      {
        text.map((el, i) => {
          return (
            <div key={i} className="item">
              <h1>{el}</h1>
              <button onClick={() => dataDelete(i)}>Delete</button>
              <button onClick={() => dataUpdate(i, inputvalue)}>Update</button>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
