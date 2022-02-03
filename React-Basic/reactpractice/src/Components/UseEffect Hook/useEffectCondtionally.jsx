import React, { useEffect } from 'react';

function CondtionallyChnageEffect() {
    const [change,setChange]=React.useState(0)
    const [name,setName]=React.useState("")

    useEffect(()=>{
        console.log('useEffect-updating document title')
        document.title=`you clicked ${change} times`
    },[change])

  return(
      <div>
          <h3><input type="text" value={name} onChange={e=>setName(e.target.value)} /></h3>
          <button onClick={()=>setChange(change+1)}>click {change} times</button>
      </div>
  )
}

export default CondtionallyChnageEffect;
