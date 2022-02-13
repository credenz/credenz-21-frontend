import React from "react";
import "../CSS/footer.css";
export const Footer = (props) => {
  return (
    <div
      className={
        props.stickyBottom ? "footer-main sticky-bottom" : "footer-main"
      }
    >
      <div className="row justify-content-center">
        © PICT IEEE Student Branch
      </div>
    </div>
  );
};
