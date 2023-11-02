import React from "react";
import "../style/allCategories.css";

const CategoryItem = ({ logo, title, description, buttonText }) => {
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
          <button className="btn btn-info float-center me-2">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
