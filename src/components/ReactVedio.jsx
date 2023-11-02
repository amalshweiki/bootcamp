import React from "react";
import imageBox1 from "../images/reactblue.png";
import imageBox4 from "../images/react=box4.png";
import { youtubeLinks } from "../Model/reactResources";
import { udemyLinks } from "../Model/reactResources";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../style/htmlpage.css";
import BoxLinks from "./BoxLinks";
import BoxYoutube from "./BoxYoutube";
const ReactVedio = () => {
  const [Tubelinks, SetTubelinks] = useState(youtubeLinks);
  const [Udemylinks, SetUdemylinks] = useState(udemyLinks);

  return (
    <div class="grid-container">
      <div class="box1 fade-in-left">
        <img src={imageBox1} style={{ borderRadius: "200px" }} />
      </div>
      <div class="box2 fade-in-right">
        <h3 className="title-resorces">Youtube Cources Links</h3>
        <BoxYoutube links={Tubelinks} />
      </div>
      <div class="box3 fade-in-left">
        <h3 className="title-resorces">Udemy Cources Links</h3>
        <BoxLinks links={Udemylinks} />
      </div>
      <div class="box4 fade-in-right">
        <img src={imageBox4} style={{ borderRadius: "200px" }} />
      </div>
    </div>
  );
};

export default ReactVedio;
