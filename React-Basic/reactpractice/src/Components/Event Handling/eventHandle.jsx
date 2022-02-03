import React from 'react';

function Events() {
    const handleEvent=()=>{
        console.log('clicked')
    }
  return <div>
      <button onClick={handleEvent}>event clicked</button>
  </div>;
}
export default Events