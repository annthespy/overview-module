import React from "react";
import "../styles.scss";
import { GrFormCheckmark } from "react-icons/gr";

const StyleSelector = ({ styles, currentStyle }) => {
  // console.log("style in styleseklector: ", styles);
  return (
    <div className="style-selector">
      <div className="style-type">STYLE > {currentStyle.name}</div>

      <div className="selected-style-container">
        {styles !== [] && styles != undefined
          ? styles.map((style, index) => (
              <div
                className="style-icon"
                style={{
                  backgroundImage: `url(${style.photos[0].thumbnail_url})`,
                }}
              ></div>
            ))
          : null}
      </div>
    </div>
  );
};

export default StyleSelector;
