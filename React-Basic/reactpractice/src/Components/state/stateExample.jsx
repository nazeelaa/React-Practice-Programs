import React from 'react';

function Increment() {
   const [data,setData]=React.useState(0)
   const updateData=()=>{
       setData(data+1)
   }
  return(
      <div>
        <h1>{data}</h1>
        <button onClick={updateData}>update</button>
        </div>
  );
}

export default Increment;
