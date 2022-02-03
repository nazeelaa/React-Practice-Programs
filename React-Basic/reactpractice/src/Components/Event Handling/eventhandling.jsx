import React from 'react';

export default function Handling() {
    function handlingEvents(){
        console.log('handle event')
    }
  return <div>
      <button onClick={handlingEvents} > EVENTS</button>
  </div>;
}
