import React from 'react'

function Today(props){
    return(
        <h1>method as props
        <button onClick={props.getData}>on click</button>
        </h1>
    )
}

export default Today;
