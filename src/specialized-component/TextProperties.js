import React from "react";
import { Properties } from "../components/Properties";
import { Dropdown } from "../components/Dropdown";
import { InputColor } from "../components/InputColor";
import { rgbaToHex } from "../helper";

const item = [
  { label: "satu", link: "#" },
  { label: "dua", link: "#" },
  { label: "tiga", link: "#" },
  { label: "empat", link: "#" }
];

export class TextProperties extends React.Component {
  serialize() {
    return {};
  }
  render() {
    const { props } = this;
    return (
      <Properties title="Text Properties" display={props.display}>
        <div style={{ marginTop: "1em" }}>Font</div>
        <Dropdown items={item} label={props.font} />
        <div style={{ marginTop: "1em" }}>Color</div>
        <InputColor color="yellow" label={rgbaToHex(props.color)} />
        <div style={{ marginTop: "1em" }}>Size</div>
        <input
          className="form-control"
          type="number"
          value={props.size}
          onChange={() => false}
        />
        <div style={{ marginTop: "1em" }}>Text</div>
        <textarea className="form-control" value={props.text} />
      </Properties>
    );
  }
}
