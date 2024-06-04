import React, { useState } from 'react';

function App() {
  const [inputvalue, setInputvalue] = useState()
  const [text, setText] = useState([])

  let copyData = () => {
    var data = [...text]
    data.push(inputvalue)
    setText(data)
    setInputvalue("")

  }
  const handleDelete = (i) => {
    const newText = [...text];
    newText.splice(i, 1);
    setText(newText);
    setInputvalue("")
  };

  const handleUpdate = (i, el) => {
    const newText = [...text];
    newText[i] = el;
    setText(newText);
    setInputvalue("")
  };

  return (
    <div>
      <center>
      <input type="text" placeholder='Enter Value ..' value={inputvalue} onChange={(p) => { setInputvalue(p.target.value) }} />

      <button onClick={copyData}>Click Me</button>
      {
        text.map((el, i) => {
          return (
            <div key={i}>
            <h1>{el}</h1>
            <button onClick={() => handleDelete(i)}>Delete</button>
          <button onClick={() => handleUpdate(i, inputvalue)}>Update</button>
            </div>
          )
        })
      }
     
     </center>
    </div>
  );
}

export default App;
