import React, { useState } from 'react';

function DemoPrevState() {
    const initalValue=0
    const [value,setValue]=useState(initalValue)
    const changeToPrev=()=>{
        for(let i=0;i<10;i++)
        setValue(prevValue=>prevValue+1)
    }
  return (
      <div>
          count: {value}
          <button onClick={()=>setValue(initalValue)}>Reset</button>
          <button onClick={()=>setValue(prevValue=>prevValue+1)}>Increment </button>
          <button onClick={()=>setValue(prevValue=>prevValue-1)}>Decrement </button>
          <button onClick={changeToPrev}>jump </button>
      </div>
  )
}

export default DemoPrevState;
