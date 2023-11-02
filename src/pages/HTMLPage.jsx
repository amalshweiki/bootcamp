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
import AllCategories from "../components/AllCategories";
import React, { useRef } from "react";

const HTMLPage = () => {
  const [showVedio, setShowVedio] = useState(false);
  const [showArtical, setShowArtical] = useState(false);

  const [textVisible, setTextVisible] = useState(true);
  const toggleVedio = () => {
    setShowVedio(!showVedio);
    setShowArtical(false);
    setTextVisible(false);
  };
  const toggleArtical = () => {
    setShowArtical(!showArtical);
    setShowVedio(false);
    setTextVisible(false);
  };

  return (
    <div>
      <h1 className="html-title"> HTML Rsources</h1>
      <h3 className="html-subTitle">
        HTML is the standard markup language for Web pages. With HTML you can
        create your own Website. HTML is easy to learn - You will enjoy it!
      </h3>

      <div className="allSources">
        <div className="Sources1">
          <div className="img-Sources">
            <div className="img-inner-Sources">
              <div className="inner-skew-Sources">
                <img src={linklogo} />
                <h3 className="title-resorces"> Vedio Resorces</h3>
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
            {textVisible && (
              <div>
                <h4 className="text-disappear">
                  To access more resources (videos, articles, PDFs), <br />
                  click the <span className="see-more-text">
                    {" "}
                    'See More'
                  </span>{" "}
                  button.
                </h4>
              </div>
            )}
            {showVedio && <HTMlVedio />}
            {showArtical && <HTMLArticals />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HTMLPage;
