import React from "react";
import { useEffect, useState } from "react";
import { BsDot } from "react-icons/bs";
import axios from "axios";
import { Link } from "react-router-dom";
const FetchAndDisplay = ({ category, title }) => {
  const [resources, setResources] = useState([]);
  const baseURL = " https://65154091dc3282a6a3ce170b.mockapi.io/sharedlinks";
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setResources(response.data);
    });
  }, [resources]);
  return (
    <div>
      <div>
        <h1>{title}</h1>

        <div className="box1-shared">
          <ul>
            <h4>Youtube Resources</h4>
            {resources
              .filter(
                (res) => res.category === category && res.type === "youtube"
              )
              .map((res) => (
                <li key={res.id}>
                  <BsDot />
                  {res.name}{" "}
                  <Link to={res.url} style={{ marginLeft: "2px" }}>
                    click here{" "}
                  </Link>
                </li>
              ))}
          </ul>
          <ul>
            <h4>Article Resources</h4>
            {resources
              .filter(
                (res) => res.category === category && res.type === "article"
              )
              .map((res) => (
                <li key={res.id}>
                  {" "}
                  <BsDot /> {res.name}{" "}
                  <Link to={res.url} style={{ marginLeft: "2px" }}>
                    click here{" "}
                  </Link>
                </li>
              ))}
          </ul>
          <ul>
            <h4>Udemy Resources</h4>
            {resources
              .filter(
                (res) => res.category === category && res.type === "udemy"
              )
              .map((res) => (
                <li key={res.id}>
                  <BsDot /> {res.name}{" "}
                  <Link to={res.url} style={{ marginLeft: "2px" }}>
                    click here{" "}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FetchAndDisplay;
