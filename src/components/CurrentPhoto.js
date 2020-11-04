import React from "react";
import "../styles.scss";
import { FaArrowLeft, FaArrowRight, FaExpand } from "react-icons/fa";
import PhotoCarousel from "./PhotoCarousel";

const CurrentPhoto = ({ changeView, currentStyle }) => {
  return (
    <div className="current-photo-container">
      <div id="current-photo">
        <img
          alt="photo_of_the_chosen_product"
          src={currentStyle.photos[0].url}
        />
      </div>
      <PhotoCarousel currentStyle={currentStyle} />
      <span id="left-arrow">
        <FaArrowLeft />
      </span>
      <span id="right-arrow">
        <FaArrowRight />
      </span>
      <span id="expand">
        <FaExpand onClick={() => changeView("expanded")} />
      </span>
    </div>
  );
};

export default CurrentPhoto;
