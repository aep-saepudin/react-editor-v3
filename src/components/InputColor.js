import React from "react";
import "./css/Inputcolor.css";

class InputColorView extends React.Component {
  static defaultProps = {
    label: "red",
    color: "red"
  };

  render() {
    return (
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span
            onClick={this.props.onclick}
            className="input-group-text inputgroup--label__background"
            id="basic-addon1"
            style={{ backgroundColor: this.props.color }}
          />
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="red"
          aria-label="Username"
          aria-describedby="basic-addon1"
          value={this.props.label}
          onChange={() => false}
        />
      </div>
    );
  }
}

export class InputColor extends React.Component {
  state = {
    color: this.props.color,
    label: this.props.label
  };

  bindDataColor(e) {
    this.setState({ color: e.target.value, label: e.target.value });
  }

  openColorPicker() {
    this.colorPicker.click();
  }

  render() {
    return (
      <div style={this.props.style}>
        <InputColorView
          label={this.state.label}
          color={this.state.color}
          onclick={this.openColorPicker.bind(this)}
        />
        <input
          type="color"
          ref={input => (this.colorPicker = input)}
          onInput={this.bindDataColor.bind(this)}
          style={{ display: "none" }}
        />
      </div>
    );
  }
}
