import React, { Component } from 'react';

class Ternarydemo extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isTernary:true
      }
    }
    
  render() {
    return this.state.isTernary?(
        <div>using ternary condtion-true</div>
    ):(<div>using ternary condtion-false</div>)
  }
}

export default Ternarydemo;
