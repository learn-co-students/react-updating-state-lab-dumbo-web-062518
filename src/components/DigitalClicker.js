// Code DigitalClicker Component Here

import React, { Component } from 'react';

export default class DigitalClicker extends Component {
  constructor(props) {
    super(props)

    this.state = {
      timesClicked: 0
    }
  }

  handleClick = () => {
    let currentState = this.state.timesClicked
    return this.setState({
      timesClicked: ++currentState
    })
  }

  render() {
    return (
      <button onClick={this.handleClick}>{this.state.timesClicked}</button>
    )
  }
}
