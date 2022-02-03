import React, { Component } from 'react';

 class Message extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          message:"welcome to react"
       }
     }
     changeName(){
         this.setState({
             message:"bye bye"
         })
     }
  render() {
    return(
        <div>
            {this.state.message}
            <button onClick={()=>this.changeName()}>change me</button>
        </div>
    ) 
  }
}

export default Message;
