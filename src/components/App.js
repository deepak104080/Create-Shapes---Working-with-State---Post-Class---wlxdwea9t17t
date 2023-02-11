import React, { useState } from 'react'
import '../styles/App.css';
const App = () => {

  const [selectedVal, setSelectedVal] = useState('square'); //to temporarily store dropdown value
  const [shapeArray, setShapeArray] = useState([]); //array to iterate for displaying circle or square

  const selectFn = (e) => {
    console.log('select done.', e.target.value);
    setSelectedVal(e.target.value);
  }

  const selectedFn = () => {
    console.log('selected fn - latest value - ', selectedVal);
    setShapeArray([...shapeArray, selectedVal]);
  }

  return (
    <div id="main">
      <div id="shape-creator">
        <select onChange={selectFn}>
          <option value="square">Square</option>
          <option value="circle">Circle</option>
        </select>

        <button onClick={selectedFn}>Add Shape</button>

      </div>
      <div id="shapes-holder">
        {shapeArray.map((item, index) => (
          <div className={item}>{index}</div>
        ))}
      </div>
    </div>
  )
}


export default App;
