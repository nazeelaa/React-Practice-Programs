import React, { Component } from 'react';

class Eventbind extends Component {
constructor(props) {
  super(props)

  this.state={
    msg:"Hello Nazeela"  
  }
}

eventBind(){
    this.setState({
        msg:"goodBye Nazeela"
    })
}


  render() {
    return (
        <div>
           <h1>{this.state.msg}</h1> 
            <button onClick={this.eventBind.bind(this)}>Event binding</button>
        </div>
  
    )
}
}
export default Eventbind;
