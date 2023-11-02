import React from "react";
import imageBox4 from "../images/content-author-writer.jpg";
import imagebox1 from "../images/team-programmers-working-program-code-with-laptops-teamwork-male-female-professional-testers-coders-flat-vector-illustration-software-development-programming-lesson-c.jpg";
import { ArticlsLinks } from "../Model/CSSResources";
import { udemyLinks } from "../Model/CSSResources";
import { ArticlsExcersies } from "../Model/CSSResources";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "../style/htmlpage.css";
import BoxLinks from "./BoxLinks";
const CSSArticals = () => {
  const [articlslinks, SetArticlslinks] = useState(ArticlsLinks);
  const [Udemylinks, SetUdemylinks] = useState(udemyLinks);
  const [openVideoIndex, setOpenVideoIndex] = useState(null);
  const [articlsLlinksEXC, SetArticlsLlinksEXC] = useState(ArticlsExcersies);
  const openVideo = (index) => {
    setOpenVideoIndex(index);
  };

  const closeVideo = () => {
    setOpenVideoIndex(null);
  };
  return (
    <div className="grid-container">
      <div className="box1 fade-in-left">
        <img src={imagebox1} />
      </div>
      <div className="box2 fade-in-right">
        <h3 className="title-resorces artical-padding">Articls Links</h3>
        <BoxLinks links={articlslinks} />
      </div>
      <div className="box3 fade-in-left">
        <h3 className="title-resorces"> Websites that offer exercises </h3>
        <BoxLinks links={articlsLlinksEXC} />
      </div>
      <div className="box4 fade-in-right">
        <img src={imageBox4} />
      </div>
    </div>
  );
};

export default CSSArticals;
