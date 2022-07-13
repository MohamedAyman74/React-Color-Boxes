import React, { Component } from "react";
import "./BigBox.css";
import ColoredBox from "./ColoredBox";

class BigBox extends Component {
  static defaultProps = { boxes: 18 };

  render() {
    return (
      <div className="BigBox">
        <h1>Color Changing Boxes!</h1>
        <div className="BigBox-Container">
          {[...Array(this.props.boxes)].map(() => (
            <ColoredBox />
          ))}
        </div>
        <p>Click on any box to change it's color.</p>
      </div>
    );
  }
}

export default BigBox;
