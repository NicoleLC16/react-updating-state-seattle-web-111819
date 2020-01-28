import React, { Component } from "react";

class ButtonCounter extends Component{
  constructor() {
    super()
    this.state = {
      count: 0
    }
  }

  handleClick = () => {
    this.setState(previousState => {
      return {count: previousState.count + 1}
    })
  }
  
  render() {
    return(
      <div>
        <h1>
        Button Count: {this.state.count}
        </h1>
        <button onClick={this.handleClick}>Click!</button>
      </div>
    )
  }
}

export default ButtonCounter;