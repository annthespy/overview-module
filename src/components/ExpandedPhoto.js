import React from "react";
import "../styles.scss";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { GrFormClose } from "react-icons/gr";
import PhotoCarousel from "./PhotoCarousel";

const ExpandedPhoto = ({ handleViewChange, currentStyle, currentPhoto }) => {
  return (
    <div className="expanded-photo-container">
      <div id="current-photo2">
        <img alt="enlarged_photo_of_the_chosen_product" src={currentPhoto} />
      </div>
      <PhotoCarousel currentStyle={currentStyle} />
      <span id="left-arrow">
        <FaArrowLeft />
      </span>
      <span id="right-arrow">
        <FaArrowRight />
      </span>
      <span id="fold">
        <GrFormClose onClick={() => handleViewChange("main")} />
      </span>
    </div>
  );
};

export default ExpandedPhoto;

//<img src={currentStyle.photos[0].url} />

// <img src="https://images.unsplash.com/photo-1552902865-b72c031ac5ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80" />
