import React, { useState } from "react";
import "../styles.scss";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { GrFormClose } from "react-icons/gr";
import PhotoCarousel from "./PhotoCarousel";

const ExpandedPhoto = ({
  handleViewChange,
  photos,
  currentPhoto,
  handlePhotoChange,
}) => {
  const [currentPhotoIndex, setIndex] = useState(0);

  return (
    <div className="expanded-photo-container">
      <div id="current-photo2">
        <img alt="enlarged_photo_of_the_chosen_product" src={currentPhoto} />
      </div>
      <PhotoCarousel photos={photos} handlePhotoChange={handlePhotoChange} />
      <span id="left-arrow">
        <FaArrowLeft
          onClick={() => {
            handlePhotoChange(photos[currentPhotoIndex - 1].url);
            setIndex(currentPhotoIndex - 1);
          }}
        />
      </span>
      <span id="right-arrow">
        <FaArrowRight
          onClick={() => {
            handlePhotoChange(photos[currentPhotoIndex + 1].url);
            setIndex(currentPhotoIndex + 1);
          }}
        />
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
