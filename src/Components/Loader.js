import React from "react";
import "../CSS/loader.css";

const Loader = () => {
  return (
    <div className="loaderContainer">
      <div className="loader">
        <div className="loader__square">
          <span className="loader__square--part part-1"></span>
          <span className="loader__square--part part-2"></span>
          <span className="loader__square--part part-3"></span>
          <span className="loader__square--part part-4"></span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
