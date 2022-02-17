import React from "react";
import "../CSS/textSlice.css";
const TextSliced = (props) => {
  return (
    <span className={`item_outer ${props.activeLink ? "item_active" : ""}`}>
      <span
        className="item_text edgtf-split-holder"
        style={{ position: "relative", whiteSpace: "nowrap" }}
      >
        {" "}
        <span className="edgtf-split-item-prim">{props.title}</span>{" "}
        <span className="edgtf-split-item-sec">{props.title}</span>{" "}
      </span>
      <i
        className="edgtf-menu-arrow fa fa-angle-down ms-2"
        hidden={props.hidden}
      ></i>
    </span>
  );
};

export default TextSliced;
