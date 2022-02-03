import React, { useEffect } from 'react';

function DemoEffectUse() {
    const [data,setData]=React.useState(0)

    useEffect(()=>{
        document.title =`you click ${data} times`
    })

  return(
      <div>
          <button onClick={()=>setData(data+1)}>click{data}times</button>
      </div>
  )
}

export default DemoEffectUse;
