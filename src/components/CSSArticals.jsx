import imageBox4 from "../images/content-author-writer.jpg";
import imagebox1 from "../images/team-programmers-working-program-code-with-laptops-teamwork-male-female-professional-testers-coders-flat-vector-illustration-software-development-programming-lesson-c.jpg";
import { ArticlsLinks } from "../Model/CSSResources";
import { ArticlsExcersies } from "../Model/CSSResources";
import { useState } from "react";
import ArticalsAndExercises from "./ArticalsAndExercises";
import "../style/htmlpage.css";

const CSSArticals = () => {
  return (
    <ArticalsAndExercises
      image1={imagebox1}
      image2={imageBox4}
      links={ArticlsLinks}
      exercises={ArticlsExcersies}
    />
  );
};

export default CSSArticals;
