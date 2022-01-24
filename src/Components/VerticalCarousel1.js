import React, { useState } from "react";
import "../CSS/verticalCarousel.css";

const VerticalCarousel1 = (props) => {
  return (
    <div className="bg-dark section-events height-full o-x-hide">
      <div className="wrapper">
        <div className="carousel">
          <div className="carousel__item">
            <div className="carousel__item-head">🐳</div>
            <div className="carousel__item-body">
              <p className="title">spouting whale</p>
              <p>Unicode: U+1F433</p>
            </div>
          </div>
          <div className="carousel__item">
            <div className="carousel__item-head">🐋</div>
            <div className="carousel__item-body">
              <p className="title">whale</p>
              <p>Unicode: U+1F40B</p>
            </div>
          </div>
          <div className="carousel__item">
            <div className="carousel__item-head">🐬</div>
            <div className="carousel__item-body">
              <p className="title">dolphin</p>
              <p>Unicode: U+1F42C</p>
            </div>
          </div>
          <div className="carousel__item">
            <div className="carousel__item-head">🐟</div>
            <div className="carousel__item-body">
              <p className="title">fish</p>
              <p>Unicode: U+1F41F</p>
            </div>
          </div>
          <div className="carousel__item">
            <div className="carousel__item-head">🐠</div>
            <div className="carousel__item-body">
              <p className="title">tropical fish</p>
              <p>Unicode: U+1F420</p>
            </div>
          </div>
          <div className="carousel__item">
            <div className="carousel__item-head">🐡</div>
            <div className="carousel__item-body">
              <p className="title">blowfish</p>
              <p>Unicode: U+1F421</p>
            </div>
          </div>
          <div className="carousel__item">
            <div className="carousel__item-head">🦈</div>
            <div className="carousel__item-body">
              <p className="title">shark</p>
              <p>Unicode: U+1F988</p>
            </div>
          </div>
          <div className="carousel__item">
            <div className="carousel__item-head">🐙</div>
            <div className="carousel__item-body">
              <p className="title">octopus</p>
              <p>Unicode: U+1F419</p>
            </div>
          </div>
          <div className="carousel__item">
            <div className="carousel__item-head">🐚</div>
            <div className="carousel__item-body">
              <p className="title">spiral shell</p>
              <p>Unicode: U+1F41A</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerticalCarousel1;
