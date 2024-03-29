import React from "react";
import swal from "sweetalert";
import "../CSS/playButton.css";

function PlayButton({ link }) {
  return (
    <a href={link} className="play-btn-wrapper">
      <button
        onClick={() => {
          alert("Stay Tuned!");
        }}
        className="play-btn play-btn--light"
      >
        <span className="play-btn__inner">
          <span className="play-btn__slide"></span>
          <span className="play-btn__content">Add to Cart</span>
        </span>
      </button>
    </a>
  );
}

export default PlayButton;
