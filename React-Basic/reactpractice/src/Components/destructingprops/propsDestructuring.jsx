import React from 'react';
//destructing in function parameter
function Propdemo({hero,heroname}) {
  return <div>
  <h1>{hero} is {heroname}</h1> 
  </div>;
}
export default Propdemo
