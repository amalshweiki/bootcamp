import React, { useState } from "react";
import BoxLinks from "./BoxLinks";

const ArticalsAndExercises = ({ image1, image2, links, exercises }) => {
  const [articlslinks, SetArticlslinks] = useState(links);
  const [openVideoIndex, setOpenVideoIndex] = useState(null);
  const [articlsLlinksEXC, SetArticlsLlinksEXC] = useState(exercises);

  return (
    <div className="grid-container">
      <div className="box1 fade-in-left">
        <img src={image1} />
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
        <img src={image2} />
      </div>
    </div>
  );
};

export default ArticalsAndExercises;
