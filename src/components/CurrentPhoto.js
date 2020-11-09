import React, { useState } from "react";
import "../styles.scss";
import { FaArrowLeft, FaArrowRight, FaExpand } from "react-icons/fa";
import PhotoCarousel from "./PhotoCarousel";

const CurrentPhoto = ({
  handleViewChange,
  currentPhoto,
  photos,
  handlePhotoChange,
}) => {
  const [currentPhotoIndex, setIndex] = useState(0);

  return (
    <div className="current-photo-container">
      <div id="current-photo">
        <img alt="photo_of_the_chosen_product" src={currentPhoto} />
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
      <span id="expand">
        <FaExpand onClick={() => handleViewChange("expanded")} />
      </span>
    </div>
  );
};

export default CurrentPhoto;
