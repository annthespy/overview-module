import React from "react";
import "../styles.scss";
import { GrCheckmark } from "react-icons/gr";

const Description = ({ productInfo, features }) => {
  return (
    <div className="description">
      <div className="slogan-box">
        <div>
          <p id="slogan">
            <strong>{productInfo.slogan}</strong>
          </p>
          <p id="description">{productInfo.description}</p>
        </div>
      </div>
      <div className="features-box">
        <div id="features">
          {features ? (
            features.map((feature) => (
              <div>
                <GrCheckmark /> {feature.feature}: {feature.value}
              </div>
            ))
          ) : (
            <div>
              <GrCheckmark /> No features
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Description;
