import React, { Component } from "react";

export default class StateExample extends Component {
  constructor(props) {
    super(props);
    this.state={ currentTemp: "78" };
    // this.handleClick = this.handleClick.bind(this);
  }

//   handleClick() {
    // this.setState({ currentTemp: "48"})
//   }

handleClick = () => {
    this.setState({ currentTemp:"25" })
}

  render() {
    return (
      <div>
        <h1>Hello current temp is {this.state.currentTemp}</h1>
        <button onClick={this.handleClick}>Change Temp</button>
      </div>
    );
  }
}
