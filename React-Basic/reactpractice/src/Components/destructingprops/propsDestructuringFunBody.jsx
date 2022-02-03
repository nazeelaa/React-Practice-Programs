import React from 'react';
//destructuring in function body
function Inbody(props) {
    const {hero,heroine}=props

  return <div>
     <h1>{hero} and {heroine}--using destructuring in fun body--</h1>  
  </div>;
}
export default Inbody