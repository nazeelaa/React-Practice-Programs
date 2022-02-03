import React, { Component } from 'react';

class RenderingDemo extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isbox:true
      }
    }
    
  render() 
  {
      if(this.state.isbox)
      {
          return<div><button>Ayub</button>--condtional rendering--</div>
      }
      else
      {
         return  <div><button>Nazeela</button>--condtional rendering--</div>
      }
    //return <div></div>;
  }
}

export default RenderingDemo;
