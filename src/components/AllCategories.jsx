import { Link } from "react-router-dom";
import { useState } from "react";
import CategoryItem from "./CategoryItem";
import CATEGORIESDATA from "../Model/categoriesdata";
import "../style/allCategories.css";
const AllCategories = () => {
  const [categoriesdata, setCategoriesdata] = useState(CATEGORIESDATA);

  return (
    <div className="categories-container">
      {categoriesdata.map((category, index) => (
        <CategoryItem
          key={index}
          logo={category.logo}
          title={category.title}
          description={category.description}
          buttonText={category.buttonText}
          linkPage={category.linkPage}
        />
      ))}
    </div>
  );
};

export default AllCategories;
