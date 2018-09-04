// Code DigitalClicker Component Here
import React, { Component } from 'react';

export default class DigitalClicker extends Component{

  constructor(){
    super()
    this.state = {
      timesClicked: 0,
    }
  };

  handleClick = () =>{
  let currentState = this.state.timesClicked
    this.setState ({
    timesClicked: ++currentState
  }, () => console.log(currentState))
}

  render(){
    return(
      <button onClick={this.handleClick}>{`${this.state.timesClicked}`}</button>
    )}
}
