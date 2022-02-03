import React from 'react';

 function Person({persons}) {
 
  return (
    <div>
    <h1>{persons.id}.{persons.name}</h1>
    </div>

  )
}
export default Person