// Code DigitalClicker Component Here
import React from 'react';

export default class DigitalClicker extends React.Component{

  state = {
    timesClicked: 0
  }

  handleClick = () => {
    this.setState((prev) => ({
      timesClicked: ++prev.timesClicked
    }))
  }

  render () {
    return (
      <div>
        <button onClick={this.handleClick}>{this.state.timesClicked}</button>
      </div>
    )
  }
}
