import React, { Component } from 'react';

export class Bike extends Component {
  render() {
    return <h2>my bike is {this.props.model}</h2>;
  }
}

export default Bike;
