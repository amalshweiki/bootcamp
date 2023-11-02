import React from "react";
import imageBox1 from "../images/box1js.png";
import imageBox4 from "../images/js-Proaming.png";
import { youtubeLinks } from "../Model/JSResources";
import { udemyLinks } from "../Model/JSResources";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../style/htmlpage.css";
import BoxLinks from "./BoxLinks";
import BoxYoutube from "./BoxYoutube";
const JSVedio = () => {
  const [Tubelinks, SetTubelinks] = useState(youtubeLinks);
  const [Udemylinks, SetUdemylinks] = useState(udemyLinks);
  return (
    <div class="grid-container">
      <div class="box1 fade-in-left">
        <img src={imageBox1} />
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
        <img src={imageBox4} />
      </div>
    </div>
  );
};

export default JSVedio;
