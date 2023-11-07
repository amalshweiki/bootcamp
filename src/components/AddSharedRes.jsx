import React from "react";
import axios from "axios";
const AddSharedRes = ({ categorySelect, typeSelect, nameRes, urlRes }) => {
  const baseURL = " https://65154091dc3282a6a3ce170b.mockapi.io/sharedlinks";

  axios
    .delete(`https://65154091dc3282a6a3ce170b.mockapi.io/sharedlinks/46`)
    .then((response) => {
      console.log("Resource deleted successfully:", response.data);
    })
    .catch((error) => {
      console.log("Error deleting resource:", error);
    });

  return <div></div>;
};

export default AddSharedRes;
