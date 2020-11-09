import React from "react";
import "../styles.scss";
import CurrentPhoto from "./CurrentPhoto";
import ExpandedPhoto from "./ExpandedPhoto";
import ProductInformation from "./ProductInformation";
import Description from "./Description";
//import getCurrentProductInfo from "../apiHelpers/getCurrentProductInfo";
//import getStyles from "../apiHelpers/getStyles";
import axios from "axios";
//TODO remove example data
import exampleData from "../data";
import { image } from "../Image";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "main",
      productInfo: {}, //exampleData.info,
      styles: [], //exampleData.styles.results,
      currentStyle: {},
      currentPhoto: "",
      photos: [],
    };

    this.handleViewChange = this.handleViewChange.bind(this);
    this.handleStyleChange = this.handleStyleChange.bind(this);
    this.handlePhotoChange = this.handlePhotoChange.bind(this);
    this.getCurrentProductInfo = this.getCurrentProductInfo.bind(this);
    this.getStyles = this.getStyles.bind(this);
    this.transformPhotoData = this.transformPhotoData.bind(this);
  }

  componentDidMount() {
    this.getCurrentProductInfo(this.props.apiIP, this.props.productId);
    this.getStyles(this.props.apiIP, this.props.productId);
  }

  getCurrentProductInfo(ip, id) {
    return axios
      .get(`${ip}/products/${id}`)
      .then(({ data }) => {
        this.setState({ productInfo: data });
      })
      .catch((err) => console.error(err));
  }

  getStyles(ip, id) {
    return axios
      .get(`${ip}/products/${id}/styles`)
      .then(({ data }) => {
        this.setState({
          styles: data.results,
          currentStyle: data.results[0],
          currentPhoto: data.results[0].photos[0].url
            ? data.results[0].photos[0].url
            : image,
          photos: data.results[0].photos,
        });
      })
      .then(() => this.transformPhotoData())
      .catch((err) => console.error("cannot get styles", err));
  }

  handleViewChange(type) {
    this.setState({ view: type });
  }

  handleStyleChange(style) {
    this.setState({ currentStyle: style, photos: style.photos });
  }

  handlePhotoChange(url) {
    this.setState({ currentPhoto: url });
  }

  transformPhotoData() {
    this.state.photos.map((photo) => {
      if (photo.url === null || photo.url === undefined) {
        photo.url = image;
      }
    });
    this.state.styles.map((style) => {
      if (
        style.photos[0].thumbnail_url === null ||
        style.photos[0].thumbnail_url === undefined
      ) {
        style.photos[0].thumbnail_url = image;
      }
    });
  }

  render() {
    if (!this.props.apiIP || !this.props.productId)
      return (
        <div className="no-props">
          <span className="text">
            To render this component pass the required props
          </span>
        </div>
      );
    else {
      return (
        <div>
          <header>
            <p className="announcement">
              <em>SITE-WIDE ANNOUNCEMENT MESSAGE!</em> &mdash; SALE / DISCOUNT{" "}
              <strong>OFFER</strong>
              &mdash; <a href="">NEW PRODUCT HIGHLIGHT</a>{" "}
            </p>
          </header>
          <div className="overview-component">
            {this.state.view === "main" ? (
              <>
                <CurrentPhoto
                  handleViewChange={this.handleViewChange}
                  handlePhotoChange={this.handlePhotoChange}
                  currentPhoto={this.state.currentPhoto}
                  photos={this.state.photos}
                />
                <ProductInformation
                  handlePhotoChange={this.handlePhotoChange}
                  handleStyleChange={this.handleStyleChange}
                  productInfo={this.state.productInfo}
                  styles={this.state.styles}
                  currentStyle={this.state.currentStyle}
                  stars={this.props.stars}
                />
              </>
            ) : (
              <ExpandedPhoto
                handleViewChange={this.handleViewChange}
                handlePhotoChange={this.handlePhotoChange}
                photos={this.state.photos}
                currentPhoto={this.state.currentPhoto}
              />
            )}
            <Description
              productInfo={this.state.productInfo}
              features={this.state.productInfo.features}
            />
          </div>
        </div>
      );
    }
  }
}

export default App;
