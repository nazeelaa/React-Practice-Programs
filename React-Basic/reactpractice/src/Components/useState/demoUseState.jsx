import React, { useState } from 'react';

function UseStateDemo() 
{
    const [count,setCount]=useState(0)
    
    

  return (
      <div>
          
          <button onClick={()=>setCount(count+1)}>Karnataka{count}--using useState</button>
      </div>
  )
}

export default UseStateDemo;
