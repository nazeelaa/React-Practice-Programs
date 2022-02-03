import React, { useState } from 'react';

function YearCounter() {
    const [year,setYear]=useState(2022)
    const [month,setMonth]=useState(1)

  return <div>
        <button onClick={()=>setYear(year+1)}>Year={year}</button>
        <button onClick={()=>setMonth(month+1)}>Month={month}</button>
  </div>;
}

export default YearCounter;
