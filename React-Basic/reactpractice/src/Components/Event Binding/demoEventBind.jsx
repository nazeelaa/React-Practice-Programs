import React, { Component } from 'react';

class DemoBind extends Component {
constructor(props) {
  super(props)

  this.state = {
      count:'welcome to event bind'
     
  }
}
welcomeBackBindling(){
    this.setState({
        count:'thanks for helping sir'
    })
}


  render() {
    return(

     <div>{this.state.count}
     <button onClick={this.welcomeBackBindling.bind(this)}>Welcome</button>
    </div>
    )
}

}

export default DemoBind;
