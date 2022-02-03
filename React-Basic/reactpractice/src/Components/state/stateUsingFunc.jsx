import React ,{useState} from "react";



const  Myage=()=>{

    const [name,setName]=React.useState("nazeela")
   
    return(
        <div>
       <h1>{name}</h1> 
       <button onClick={()=>setName(("sonal"))}>update name</button>
       </div>
      

    )
}

export default Myage;