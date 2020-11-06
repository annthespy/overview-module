import React from "react";
import "../styles.scss";
import { IoIosArrowDown } from "react-icons/io";

const PhotoCarousel = ({ currentStyle }) => {
  return (
    <div className="photo-carousel">
      {/* <span
        alt="photo_of_the_product"
        id="photo-1"
        style={{
          backgroundImage: `url(${currentStyle.photos[0].url})`,
        }}
      />
      <span
        alt="photo_of_the_product"
        id="photo-2"
        style={{
          backgroundImage: `url(${currentStyle.photos[1].url})`,
        }}
      />
      <span
        alt="photo_of_the_product"
        id="photo-3"
        style={{
          backgroundImage: `url(${currentStyle.photos[2].url})`,
        }}
      />
      <span
        alt="photo_of_the_product"
        id="photo-4"
        style={{
          backgroundImage: `url(${currentStyle.photos[3].url})`,
        }}
      />
      <span
        alt="photo_of_the_product"
        id="photo-5"
        style={{
          backgroundImage: `url(${currentStyle.photos[4].url})`,
        }}
      />
      <span id="arrow-down">
        <IoIosArrowDown />
      </span> */}
    </div>
  );
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
