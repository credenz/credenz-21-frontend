import React from "react";
import "../CSS/loader.css";

const Loader = () => {
  return (
    <div className="loaderContainer">
      <div class="loader">
        <div class="loader__square">
          <span class="loader__square--part part-1"></span>
          <span class="loader__square--part part-2"></span>
          <span class="loader__square--part part-3"></span>
          <span class="loader__square--part part-4"></span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
