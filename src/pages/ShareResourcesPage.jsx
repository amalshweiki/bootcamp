import React from "react";
import "../style/share.css";
// import "../style/htmlpage.css";
import pic1 from "../images/sharing.jpg";
import { useEffect, useState } from "react";
import axios from "axios";
import AddSharedRes from "../components/AddSharedRes";
import FetchAndDisplay from "../components/FetchAndDisplay";
const ShareResourcesPage = () => {
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
          console.log("Resource added successfully:", response.data);
        })
        .catch((error) => {
          console.log("Error adding resource:", error);
        });
    }
  }, [isAdding]);
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
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsAdding(true);
    if (nameRes === "" || urlRes === "") {
      alert("Please fill in all the required fields.");
      return;
    }
    setPlaceholderName("Example:Learn JavaScript in 1 Hour");
    setPlaceholderUrl("Example:https://www.youtube.com/");
    console.log(categoryRes, typeRes, nameRes, urlRes);
  };

  const optionCategory = [
    {
      label: " HTML Resources",
      value: "HTML",
    },
    {
      label: " CSS Resources",
      value: "CSS",
    },
    {
      label: " JS Resources",
      value: "JS",
    },
    {
      label: " React Resources",
      value: "React",
    },
  ];
  const optionCType = [
    {
      label: "Vedio Youtube Resources",
      value: "youtube",
    },
    {
      label: "Vedio Udemy Resources",
      value: "udemy",
    },
    {
      label: "Articales Resources",
      value: "article",
    },
  ];

  return (
    <div>
      <div className="container fade-in">
        <div className="container share-containes">
          <div className="shape-share">
            <img className="pic-share" src={pic1} />

            <svg
              className="svg-share"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              width="900px"
              height="900px"
              style={{ marginTop: "10%", marginLeft: "25%" }}
            >
              <path
                fill="#BFDDE5"
                d="M157.4,45.5c11.3-39.1-16.3-50.2-43.8-43.8c-25.2,5.8-35.5,17.2-61,16.5C21.7,17.4,0,39.8,0,71.3
      c0,49.1,58.2,47.8,76.2,68.5c38.8,44.7,92.8,8.2,79.3-40.3C148.1,73.2,155.9,50.6,157.4,45.5z"
              />
            </svg>
            <div className="container-form">
              <form onSubmit={handleFormSubmit}>
                <h1>Add New Resources</h1>
                <div>
                  <label htmlFor="selectOptionCategory">
                    Choese the Categoris
                  </label>{" "}
                  <br />
                  <select
                    className="select-style"
                    id="Categry"
                    name="Categry"
                    value={categoryRes}
                    onChange={handleCategoryChange}
                  >
                    {optionCategory.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="selectOptionType">
                    Choese the category of Resources
                  </label>{" "}
                  <br />
                  <select
                    className="select-style"
                    select-styleid="Resources"
                    name="Resources"
                    value={typeRes}
                    onChange={handleTypeChange}
                  >
                    {optionCType.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="textInput1">
                    The Name of vedio , cources or articales
                  </label>{" "}
                  <br />
                  <input
                    className="input-style"
                    type="text"
                    value={nameRes}
                    onChange={handleNameChange}
                    placeholder={placeholderName}
                  ></input>
                </div>
                <div>
                  <label htmlFor="textInput2">
                    Please Enter the URL of the resources You want to add
                  </label>{" "}
                  <br />
                  <input
                    className="input-style"
                    type="text"
                    value={urlRes}
                    onChange={handleUrlChange}
                    placeholder={placeholderUrl}
                  ></input>
                </div>
                <button className=" button btn-share">ADD </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="shared-resources">
        <div className="html-shared">
          <div>
            <div className="box1-shared">
              <FetchAndDisplay category="HTML" title="HTML Shared Resources" />
            </div>
          </div>
        </div>
        <div className="css-shared">
          <div>
            <div className="box1-shared">
              <FetchAndDisplay category="CSS" title="CSS Shared Resources" />
            </div>
          </div>
        </div>
        <div className="js-shared">
          <div className="box1-shared">
            <FetchAndDisplay
              category="JS"
              title="JavaScript Shared Resources"
            />
          </div>
        </div>
        <div className="react-shared">
          <div className="box1-shared">
            <FetchAndDisplay category="React" title="React Shared Resources" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareResourcesPage;
