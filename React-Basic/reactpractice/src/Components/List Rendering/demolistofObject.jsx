import React from 'react';
import Person from './Person';

function PersonList() {
    const person=[
        {
            id:101,
            name:'mercury'
        },
        {
            id:102,
            name:'venus'
        }
    ]
        const listperson = person.map(persons=><h3><Person persons={persons} /></h3>)
  return <div>
      {listperson}
  </div>;
}

export default PersonList;
