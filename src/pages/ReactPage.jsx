import "../style/htmlpage.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
// import { Link } from "react-router-dom";
import linklogo from "../images/link-logo.png";
import weblogo from "../images/websites.jpg";
import pdflogo from "../images/pdf-logo.png";
import { useState, useEffect } from "react";
import htmlyoutube from "../images/html-youtube.jpg";
import HTMlVedio from "../components/HTMlVedio";
import HTMLArticals from "../components/HTMLArticals";
import JSVedio from "../components/JSVedio";
import JSArticls from "../components/JSArticls";
import ReactVedio from "../components/ReactVedio";
import ReactArticls from "../components/ReactArticls";
import AllCategories from "../components/AllCategories";

const ReactPage = () => {
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

  return (
    <div>
      <h1 className="html-title"> React Rsources</h1>
      <h3 className="html-subTitle">
        The library for web and native user interfaces React is a JavaScript.
        library for building user interfaces
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
            {showVedio && <ReactVedio />}
            {showArtical && <ReactArticls />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReactPage;
