import imageBox4 from "../images/article.png";
import imagebox1 from "../images/web-design-monitor.jpg";
import { ArticlsLinks } from "../Model/htmlResources";
import { ArticlsExcersies } from "../Model/htmlResources";
import { useState } from "react";
import ArticalsAndExercises from "./ArticalsAndExercises";
import "../style/htmlpage.css";

const HTMLArticals = () => {
  return (
    <ArticalsAndExercises
      image1={imagebox1}
      image2={imageBox4}
      links={ArticlsLinks}
      exercises={ArticlsExcersies}
    />
  );
};

export default HTMLArticals;
