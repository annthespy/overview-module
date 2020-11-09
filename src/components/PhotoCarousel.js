import React, { useState } from "react";
import "../styles.scss";
//import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { image } from "../Image";

const PhotoCarousel = ({ photos, handlePhotoChange }) => {
  const [photoIndex, setIndex] = useState(0);

  if (photos.length)
    return (
      <div className="photo-carousel">
        {/* <span id="">
          <IoIosArrowUp onClick={() => setIndex(photoIndex - 1)} />
        </span> */}
        <span
          alt="photo_of_the_product"
          id="photo-1"
          style={{
            backgroundImage: `url(${photos[photoIndex].url})`,
          }}
          onClick={() => handlePhotoChange(photos[photoIndex].url)}
        />
        <span
          alt="photo_of_the_product"
          id="photo-2"
          style={{
            backgroundImage: photos[photoIndex + 1]
              ? `url(${photos[photoIndex + 1].url})`
              : `url(${image})`,
          }}
          onClick={() => handlePhotoChange(photos[photoIndex + 1].url)}
        />
        <span
          alt="photo_of_the_product"
          id="photo-3"
          style={{
            backgroundImage: photos[photoIndex + 2]
              ? `url(${photos[photoIndex + 2].url})`
              : `url(${image})`,
          }}
          onClick={() => handlePhotoChange(photos[photoIndex + 2].url)}
        />
        <span
          alt="photo_of_the_product"
          id="photo-4"
          style={{
            backgroundImage: photos[photoIndex + 3]
              ? `url(${photos[photoIndex + 3].url})`
              : `url(${image})`,
          }}
          onClick={() => handlePhotoChange(photos[photoIndex + 3].url)}
        />
        <span
          alt="photo_of_the_product"
          id="photo-5"
          style={{
            backgroundImage: photos[photoIndex + 4]
              ? `url(${photos[photoIndex + 4].url})`
              : `url(${image})`,
          }}
          onClick={() => handlePhotoChange(photos[photoIndex + 4].url)}
        />
        {/* <span id="arrow-down">
          <IoIosArrowDown onClick={() => setIndex(photoIndex + 1)} />
        </span> */}
      </div>
    );
  else return null;
};

export default PhotoCarousel;

// {
//   currentStyle.photos[0].url ? (
//     <div
//       id="photo-2"
//       style={{
//         backgroundImage: `url(${currentStyle.photos[0].url})`,
//       }}
//     ></div>
//   ) : (
//     <div
//       id="photo-2"
//       style={{
//         backgroundImage: `url("https://i.imgur.com/9i4bKQ6.png")`,
//       }}
//     ></div>
//   );
// }
