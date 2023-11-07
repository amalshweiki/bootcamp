import React, { useEffect, useState } from "react";
import { BsDot } from "react-icons/bs";
import axios from "axios";
import { Link } from "react-router-dom";

const FetchAndDisplay = ({ category, title }) => {
  const [resources, setResources] = useState([]);
  const baseURL = "https://65154091dc3282a6a3ce170b.mockapi.io/sharedlinks";

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setResources(response.data);
    }, []);
  }, []);

  const renderResourceList = (type) => (
    <ul>
      <h4>{type} Resources</h4>
      {resources
        .filter((res) => res.category === category && res.type === type)
        .map((res) => (
          <li key={res.id}>
            <BsDot /> {res.name}{" "}
            <Link to={res.url} style={{ marginLeft: "2px" }}>
              click here{" "}
            </Link>
          </li>
        ))}
    </ul>
  );

  return (
    <div>
      <div>
        <h1>{title}</h1>
        <div className="box1-shared">
          {["youtube", "article", "udemy"].map((resourceType) => (
            <div key={resourceType}>{renderResourceList(resourceType)}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FetchAndDisplay;
