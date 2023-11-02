import "../style/allCategories.css";
import htmlLogo from "../images/htmllogo.jpg";
import cssLogo from "../images/csslogo.jpeg";
import jsLogo from "../images/jslogo.jpg";
import reactLogo from "../images/reactlogo.jpeg";
import { Link } from "react-router-dom";
import React, { useRef } from "react";
const AllCategories = () => {
  return (
    <div className="allContainer">
      <div>
        <h1 className="all-title">All Catageries</h1>
      </div>
      <div className="a-box">
        <div className="img-container">
          <div className="img-inner">
            <div className="inner-skew">
              <img src={htmlLogo} />
            </div>
          </div>
        </div>
        <div className="text-container">
          <h3>HTML Resorces</h3>
          <div>
            Create the structure
            <Link to="/htmlpage">
              <button className=" button btn-seeMore">See More</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="a-box">
        <div className="img-container">
          <div className="img-inner">
            <div className="inner-skew">
              <img src={cssLogo} />
            </div>
          </div>
        </div>
        <div className="text-container">
          <h3>CSS Resorces</h3>
          <div>
            Stylize the website
            <Link to="/csspage">
              <button className="button btn-seeMore">See More</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="a-box">
        <div className="img-container">
          <div className="img-inner">
            <div className="inner-skew">
              <img src={jsLogo} />
            </div>
          </div>
        </div>
        <div className="text-container">
          <h3>JavaScript Resorces</h3>
          <div>
            Increase interactivity
            <Link to="/jspage">
              <button className="button btn-seeMore">See More</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="a-box">
        <div className="img-container">
          <div className="img-inner">
            <div className="inner-skew">
              <img src={reactLogo} />
            </div>
          </div>
        </div>
        <div className="text-container">
          <h3>React Resorces</h3>
          <div>
            Reuse components
            <Link to="/reactpage">
              <button className="button btn-seeMore">See More</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCategories;
