import React, { useState, useEffect, Fragment } from "react";
import "../styles.scss";
import CurrentPhoto from "./CurrentPhoto";
import ExpandedPhoto from "./ExpandedPhoto";
import ProductInformation from "./ProductInformation";
import Description from "./Description";
import getCurrentProductInfo from "../apiHelpers/getCurrentProductInfo";
import getStyles from "../apiHelpers/getStyles";
//TODO remove example data
import exampleData from "../data";

const Overview = ({ apiIP, productId }) => {
  const [view, setView] = useState("main");
  const changeView = (type) => {
    setView(type);
  };
  //TODO change initial state
  const [productInfo, setProductInfo] = useState(exampleData.info);
  // useEffect(() => {
  //   getCurrentProductInfo(apiIP, productId).then((data) => {
  //     setProductInfo(data);
  //   });
  // });
  //TODO change initial state
  const [styles, setStyles] = useState(exampleData.styles.results);
  // useEffect(() => {
  //   getStyles(apiIP, productId).then((data) => {
  //     setStyles(data.results);
  //   });
  // });
  const currentStyle = styles[0];

  //const [currentStyle, setCurrentStyles] = useState(styles[0]);

  // const [mainPhoto, setMainPhoto] = useState(currentStyle.photos[0].url);

  // const findDefault = (styles) => {
  //   for (var i = 0; i < styles.length; i++) {
  //     if (styles[i]["default?"] === 1) {
  //       changeCurrentStyle(stylesState[i]);
  //     }
  //   }
  // };

  return (
    <div className="overview-component">
      {view === "main" ? (
        <Fragment>
          <CurrentPhoto changeView={changeView} currentStyle={currentStyle} />
          <ProductInformation
            productInfo={productInfo}
            styles={styles}
            currentStyle={currentStyle}
          />
        </Fragment>
      ) : (
        <ExpandedPhoto changeView={changeView} currentStyle={currentStyle} />
      )}
      <Description productInfo={productInfo} features={productInfo.features} />
    </div>
  );
};

export default Overview;

// {view === "main" ? (
//   <Fragment>
//     <CurrentPhoto changeView={changeView} currentStyle={currentStyle} />
//     <ProductInformation
//       avgRating={props.avgRating}
//       currentInfo={props.currentInfo}
//       styles={props.styles.results}
//       currentStyle={currentStyle}
//     />
//   </Fragment>
// ) : (
//   <ExpandedPhoto changeView={changeView} currentStyle={currentStyle} />
// )}
// <Description
//   currentInfo={props.currentInfo}
//   features={props.currentInfo.features}
// />
