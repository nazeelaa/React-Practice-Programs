import React from 'react';

function DemoObject() {
    const [name,setName]=React.useState({cityname:'',statename:''})
  return(
      <div>
          <form>
              <input type="text" value={name.cityname} onChange={e=>setName({...name, cityname:e.target.value})}/>
              <input type="text" value={name.statename} onChange={e=>setName({...name, statename:e.target.value})} />
          </form>
          <h3>your city name:{name.firstname}</h3>
          <h3>your state name:{name.lastname}</h3>
      </div>
  )
}

export default DemoObject;
