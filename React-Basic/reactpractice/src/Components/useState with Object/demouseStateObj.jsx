import React,{useState} from 'react';

function ObjectDemo() {
    const [name,setName]=useState({firstname:'',lastname:''})
  return (
      <div>
          <form>
              <input type="text" value={name.firstname} onChange={e =>setName({...name, firstname:e.target.value})} />
              <input type="text" value={name.lastname} onChange={e=>setName({...name,lastname:e.target.value})}/>

          </form>
          <h4>your firstname is:{name.firstname}</h4>
          <h4>your lastname is:{name.lastname}</h4>
      </div>
  )
}

export default ObjectDemo;
