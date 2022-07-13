import React, { Component } from "react";
import "./ColoredBox.css";

class ColoredBox extends Component {
  constructor(props) {
    super(props);

    this.state = { color: `${this.randomColor()}` };
    this.handleClick = this.handleClick.bind(this);
  }

  randomColor() {
    const r = Math.floor(Math.random() * 255) + 1;
    const g = Math.floor(Math.random() * 255) + 1;
    const b = Math.floor(Math.random() * 255) + 1;
    return `rgb(${r}, ${g}, ${b})`;
  }

  handleClick() {
    this.setState({ color: `${this.randomColor()}` });
  }

  render() {
    const styles = {
      background: this.randomColor(),
    };
    return (
      <div
        className="ColoredBox"
        style={styles}
        onClick={this.handleClick}
      ></div>
    );
  }
}

export default ColoredBox;
