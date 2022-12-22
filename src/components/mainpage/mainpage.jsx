import React from "react";
import LeafLogo from "../../images/leaflogo.png";
import SearchIcon from "../../images/search-icon.png";
import Figure1 from "../../images/main-figure.jpg";
import Figure2 from "../../images/second-figure.jpg";
import Grass from "../../images/grass.jpg";
import Arrow from "../../images/right-arrow.png";
import BarChart from "../../images/barChart.png";
import Bush from "../../images/bush.webp";
import WaterDropplet from "../../images/water-dropplet.png";
import AddPlant from "../../images/add-plant.png";
import "./mainpage.scss";

function Mainpage() {
  return (
    <div className="super-div">
      <div className="navbar-main-div">
        <img alt="logo" src={LeafLogo} className="leaf-logo" />
        <div className="navigation-headings">
          <h3 className="navbar-h3">Plants</h3>
          <h3 className="navbar-h3">Our Blog</h3>
          <h3 className="navbar-h3">About Us</h3>
        </div>
        <div className="navbar-search">
          <img className="search-icon" alt="search icon" src={SearchIcon} />
          <button className="get-the-app">Get The App</button>
        </div>
      </div>
      <div className="first-section-main-div">
        <div className="first-section-info-div">
          <h2 className="info-h2">Best Solution</h2>
          <h1 className="info-h1">
            We make <br /> caring your <br /> plants smart
          </h1>
          <div className="access-price-div">
            <button className="get-access-button">Get Access</button>
            <h2 className="price-h2">$16.80</h2>
            <h5 className="price-h5">
              Monthly <br /> Price
            </h5>
          </div>
        </div>
        <div className="first-section-images-div">
          <img src={Figure1} alt="image1" className="figure-image" />
          <div className="grass-arrow-div">
            <img src={Grass} alt="image2" className="grass-image" />
            <img src={Arrow} alt="image3" className="arrow-image" />
          </div>
          <div className="final-circle"></div>
        </div>
      </div>
      <div className="second-section-main-div">
        <div className="add-plant-widgets-div">
          <div className="widget1-div">
            <img className="widget1" alt="widget 1" src={BarChart} />
            <div className="icon1-heading-div">
              <img
                className="widget1-icon"
                alt="water-dropplet"
                src={WaterDropplet}
              />
              <h3 className="widget1-heading">Humidity</h3>
            </div>
          </div>
          <div className="widget2-div">
            <img className="widget2" alt="widget 2" src={Bush} />
            <div className="icon2-heading-div">
              <img
                className="widget2-icon"
                alt="add-plant-image"
                src={AddPlant}
              />
              <h3 className="widget2-heading">New Plant</h3>
            </div>
          </div>
        </div>
        <div className="other-info-div">
          <div className="plant-metrics-div">
            <h1 className="plant-metrics-h1">
              Many plant metrics
              <br />
              are included
            </h1>
            <h1 className="fifteen-plus">
              15<b className="bold">+</b>
            </h1>
          </div>
          <div className="plant-community-div">
            <div className="plant-community-images-div">
              <div className="spheres-wrapper">
                <div className="sphere1"></div>
                <img className="sphere2" alt="sphere2" src={Figure2} />
              </div>
              <h4 className="plant-community-heading">Plant Community</h4>
            </div>
            <p className="app-description-p">
              App allows you to track humidity and pH <br />
              levels for your green friends. Comfort and <br />
              proper care. app with AI
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mainpage;
