import React, { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [text, setText]=useState([])

  let dataAdd=()=>{
    let copyData=[...text]  
    copyData.push(inputValue)
    setText(copyData)

  }

  return (
    <div>
      <center>
      <input
        type="text"
        value={inputValue}
        onChange={(p)=>setInputValue(p.target.value)}
        placeholder="Enter Something..."
      />
      <button onClick={dataAdd}>Click Me</button>
      {
        text.map((el,i) => 
          {
            return(
              <h1 key={i}>{el}</h1>
            )
          })
      }
      </center>
    </div>
  );
}

export default App;
