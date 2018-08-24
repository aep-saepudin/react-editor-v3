import React from "react";
import "./css/Properties.css";

export function Properties(props) {
  return (
    <div style={{ display: props.display ? "block" : "none" }}>
      <div className="properties--header">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          style={{ cursor: "pointer", marginRight: 10 }}
        >
          <path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z" />
        </svg>
        Back
      </div>
      <div className="properties--body">
        <div className="properties--title">{props.title}</div>
        {props.children}
      </div>
    </div>
  );
}
