import imageBox4 from "../images/react.jpg";
import imagebox1 from "../images/react2.jpg";
import { ArticlsLinks } from "../Model/reactResources";
import { ArticlsExcersies } from "../Model/reactResources";
import { useState } from "react";
import ArticalsAndExercises from "./ArticalsAndExercises";
import "../style/htmlpage.css";
const ReactArticls = () => {
  return (
    <ArticalsAndExercises
      image1={imagebox1}
      image2={imageBox4}
      links={ArticlsLinks}
      exercises={ArticlsExcersies}
    />
  );
};

export default ReactArticls;
