import React from "react";
import { useState } from "react";
import BoxLinks from "./BoxLinks";
import BoxYoutube from "./BoxYoutube";
import "../style/htmlpage.css";

const VideoLinksAndUdemy = ({ image1, image2, youtubeLinks, udemyLinks }) => {
  const [Tubelinks, SetTubelinks] = useState(youtubeLinks);
  const [Udemylinks, SetUdemylinks] = useState(udemyLinks);

  return (
    <div class="grid-container">
      <div class="box1 fade-in-left">
        <img src={image1} />
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
        <img src={image2} />
      </div>
    </div>
  );
};

export default VideoLinksAndUdemy;
