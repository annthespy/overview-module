import React from "react";
import "../styles.scss";
import StyleSelector from "./StyleSelector";
import AddToCart from "./AddToCart";
//import StaticStars from "../ratings-reviews/static-stars.jsx";

const ProductInformation = ({ productInfo, styles, currentStyle }) => {
  return (
    <div className="product-information">
      <div className="information-holder">
        <div className="rating">
          <div className="row">
            <a href="#reviews">Read all reviews</a>
          </div>
        </div>
        <div className="product-category">{productInfo.category}</div>
        <div className="product-title">{productInfo.name}</div>
        <div className="product-price">
          {parseInt(currentStyle.sale_price) > 0 ? (
            <div>
              <span>
                $<del>{currentStyle.original_price}</del>
              </span>
              <span id="sale">
                <strong> ON SALE: ${currentStyle.sale_price}</strong>
              </span>
            </div>
          ) : (
            <div>${currentStyle.original_price}</div>
          )}
        </div>
      </div>
      <StyleSelector styles={styles} currentStyle={currentStyle} />
      <AddToCart styles={styles} currentStyle={currentStyle} />
    </div>
  );
};

export default ProductInformation;
