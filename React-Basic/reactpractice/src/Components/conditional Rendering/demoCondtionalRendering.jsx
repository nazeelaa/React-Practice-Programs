import React, { Component } from 'react';
class CondtionalRendering extends Component {
constructor(props) {
  super(props)

  this.state = {
     isloggedin:true
  }
}



  render()
   {
      if(this.state.isloggedin)
      {
         return <div>hello all welcome to conditonal Rendering</div>
      }
      else
      {
          return<div>hello nazeela welcome to conditonal Rendering</div>
      }
    //return <div></div>;
  }
}

export default CondtionalRendering 