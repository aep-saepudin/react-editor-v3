import React from "react";
import ReactDOM from "react-dom";
import { TextProperties } from "./specialized-component/TextProperties";
import "./styles.css";

class App extends React.Component {
  componentDidMount() {
    console.log(this._child);
  }
  render() {
    return (
      <div>
        <TextProperties
          display={true}
          color={false}
          font="mantap"
          text="juara"
          size={20}
          ref={child => {
            this._child = child;
          }}
        />
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
