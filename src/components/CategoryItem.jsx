import React from "react";
import "../style/allCategories.css";
import { Link } from "react-router-dom";

const CategoryItem = ({ logo, title, description, buttonText, linkPage }) => {
  return (
    <div className="a-box">
      <div className="img-container">
        <div className="img-inner">
          <div className="inner-skew">
            <img src={logo} alt={title} />
          </div>
        </div>
      </div>
      <div className="text-container">
        <h3>{title}</h3>
        <div>
          {description}
          <Link to={linkPage}>
            <button className="button btn-seeMore">{buttonText}</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
