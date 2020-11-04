import React from "react";
import "../styles.scss";
// import { IoIosArrowDown } from "react-icons/io";
import { AiOutlinePlus, AiOutlineStar } from "react-icons/ai";

const AddToCart = ({ styles, currentStyle }) => {
  return (
    <div className="add-to-cart">
      <div className="select-size">
        <select className="select-size-box">
          <option value="0">SELECT SIZE</option>
        </select>
        <select className="quantity-box">
          <option value="0">1</option>
        </select>
      </div>

      <div className="add-to-bag">
        <button className="add-to-bag-box">
          ADD TO BAG
          <span id="add-icon">
            <AiOutlinePlus />
          </span>
        </button>
        <button className="add-to-favorites">
          <AiOutlineStar />
        </button>
      </div>
    </div>
  );
};

export default AddToCart;
