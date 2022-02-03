import React, { useEffect } from 'react';

function RefreshClick() {
    const [refresh,setRefresh]=React.useState(0)
    useEffect(()=>{
        document.title=`refreshed page ${refresh} times`
    })
  return(
      <div>
          <button onClick={()=>setRefresh(refresh+1)}>refreshed{refresh}times</button>
      </div>
  )
}

export default RefreshClick;
