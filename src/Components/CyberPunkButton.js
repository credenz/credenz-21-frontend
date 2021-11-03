import React from "react";
import "../CSS/cyberpunkbutton.css";
const CyberPunkButton = (customStyles) => {
  return (
    <button className="cybr-btn" style={customStyles}>
      Cyber<span aria-hidden>_</span>
      <span aria-hidden className="cybr-btn__glitch">
        Cyber_
      </span>
      <span aria-hidden className="cybr-btn__tag">
        R25
      </span>
    </button>
  );
};

export default CyberPunkButton;
