import React, { Component } from "react";

class LightSwitch extends Component {
  constructor() {
    super()

    //inital state needs to be defined
    this.state = {
      toggled: false
    }
  }

  //change in state needs to be defined
  handleClick = () => {
  this.setState(previousState => {
    return {
      toggled: !previousState.toggled
    }
  })

  }
  render() {
    return (
      <div>
  <button onClick={this.handleClick}>{this.state.toggled ? "ON" : "OFF"}</button>
      </div>
    )
  }
}

export default LightSwitch