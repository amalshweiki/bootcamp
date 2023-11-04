import imageBox4 from "../images/jsbox4.jpg";
import imagebox1 from "../images/1698570237583-transformed.png";
import { ArticlsLinks } from "../Model/JSResources";
import { ArticlsExcersies } from "../Model/JSResources";
import { useState } from "react";
import ArticalsAndExercises from "./ArticalsAndExercises";
import "../style/htmlpage.css";

const JSArticls = () => {
  return (
    <ArticalsAndExercises
      image1={imagebox1}
      image2={imageBox4}
      links={ArticlsLinks}
      exercises={ArticlsExcersies}
    />
  );
};

export default JSArticls;
