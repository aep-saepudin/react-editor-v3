import React from "react";
import "./css/Dropdown.css";

export class Dropdown extends React.Component {
  state = {
    label: this.props.label
  };
  render() {
    const items = this.props.items.map((v, i) => (
      <a
        key={i}
        className="dropdown-item dropdown__item--change-background"
        href={v.link}
        onClick={e => this.setState({ label: e.target.innerText })}
      >
        {v.label}
      </a>
    ));
    return (
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle dropdown__button--change-background"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {this.state.label}
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          {items}
        </div>
      </div>
    );
  }
}
