import { useState, useEffect } from "react";
import axios from "axios";

const useResourceForm = () => {
  const [categoryRes, setCategoryRes] = useState("");
  const [typeRes, setTypeRes] = useState("");
  const [nameRes, setNameRes] = useState("");
  const [urlRes, setUrlRes] = useState("");
  const [isAdding, setIsAdding] = useState(false);
  const [placeholderName, setPlaceholderName] = useState(
    "Example:Learn JavaScript in 1 Hour"
  );
  const [placeholderUrl, setPlaceholderUrl] = useState(
    "Example:https://www.youtube.com/"
  );
  const baseURL = " https://65154091dc3282a6a3ce170b.mockapi.io/sharedlinks";

  function isValidURL(url) {
    try {
      new URL(url);
      return true;
    } catch (error) {
      return false;
    }
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (nameRes === "" || urlRes === "") {
      alert("Please fill in all the required fields.");
      return;
    }
    if (!isValidURL(urlRes)) {
      alert("Please enter a valid URL.");
      return;
    }
    setIsAdding(true);
    setPlaceholderName("Example:Learn JavaScript in 1 Hour");
    setPlaceholderUrl("Example:https://www.youtube.com/");
    console.log(categoryRes, typeRes, nameRes, urlRes);
  };

  useEffect(() => {
    if (isAdding) {
      const addRes = {
        category: categoryRes,
        type: typeRes,
        name: nameRes,
        url: urlRes,
      };
      axios
        .post(baseURL, addRes)
        .then((response) => {
          alert("Resource added successfully!");
          console.log("Resource added successfully:", response.data);
          setIsAdding(false);
        })
        .catch((error) => {
          alert("Resource Dosnt added ");
          console.log("Error adding resource:", error);
        });
    }
    return () => setIsAdding(false);
  }, [isAdding, baseURL, categoryRes, typeRes, nameRes, urlRes]);

  const handleCategoryChange = (e) => {
    setCategoryRes(e.target.value);
  };

  const handleTypeChange = (e) => {
    setTypeRes(e.target.value);
  };

  const handleNameChange = (e) => {
    setNameRes(e.target.value);
  };

  const handleUrlChange = (e) => {
    setUrlRes(e.target.value);
  };

  return {
    categoryRes,
    typeRes,
    nameRes,
    urlRes,
    isAdding,
    placeholderName,
    placeholderUrl,
    handleCategoryChange,
    handleTypeChange,
    handleNameChange,
    handleUrlChange,
    handleFormSubmit,
  };
};

export default useResourceForm;
