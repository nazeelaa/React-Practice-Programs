import React, { Component } from 'react';

class SwitchRender extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isSwitch:false
      }
    }
    
  render() {
    return  (
        this.state.isSwitch?
         <div>condtion is true--using switch</div> :
        <div>condtion is false--using switch</div>
    )
  }
}

export default SwitchRender;
