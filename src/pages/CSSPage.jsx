import "../style/htmlpage.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
// import { Link } from "react-router-dom";
import linklogo from "../images/link-logo.png";
import weblogo from "../images/websites.jpg";
import pdflogo from "../images/pdf-logo.png";
import { useState, useEffect } from "react";
import CSSVedio from "../components/CSSVedio";
import CSSArticals from "../components/CSSArticals";
import AllCategories from "../components/AllCategories";

const CSSPage = () => {
  const [showVedio, setShowVedio] = useState(false);
  const [showArtical, setShowArtical] = useState(false);
  const [showAllcategories, setShowAllcategories] = useState(false);

  const toggleVedio = () => {
    setShowVedio(!showVedio);
    setShowArtical(false);
  };
  const toggleArtical = () => {
    setShowArtical(!showArtical);
    setShowVedio(false);
  };
  const toggleAllcategories = () => {
    setShowAllcategories(!showAllcategories);
  };
  return (
    <div>
      <h1 className="html-title"> CSS Rsources</h1>
      <h3 className="html-subTitle">
        CSS (Cascading Style Sheets) allows you to create great-looking web
        pages, but how does it work under the hood? This article explains what
        CSS is with a simple syntax example and also covers some key terms about
        the language
      </h3>

      <div className="allSources">
        <div className="Sources1">
          <div className="img-Sources">
            <div className="img-inner-Sources">
              <div className="inner-skew-Sources">
                <img src={linklogo} />
                <h3 className="title-resorces"> Video Resorces</h3>
                <button onClick={toggleVedio} className=" button btn-seeMore">
                  See More
                </button>
              </div>
            </div>
          </div>
          <div className="img-Sources">
            <div className="img-inner-Sources">
              <div className="inner-skew-Sources">
                <img src={weblogo} />
                <h3 className="title-resorces">Articles Resorces</h3>
                <button onClick={toggleArtical} className=" button btn-seeMore">
                  See More
                </button>
              </div>
            </div>
          </div>
          <div className="img-Sources">
            <div className="img-inner-Sources">
              <div className="inner-skew-Sources">
                <img src={pdflogo} />
                <h3 className="title-resorces">PDF Resorces</h3>
                <button className=" button btn-seeMore">See More</button>
              </div>
            </div>
          </div>

          <div className="text-container-Sources">
            {showVedio && <CSSVedio />}
            {showArtical && <CSSArticals />}
          </div>
        </div>
        <button onClick={toggleAllcategories} className=" button btn-seeMore">
          {showAllcategories ? "Show Less" : "Show All Categories"}
        </button>
        <div>{showAllcategories && <AllCategories />}</div>
      </div>
    </div>
  );
};

export default CSSPage;
