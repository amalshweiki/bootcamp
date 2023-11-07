import pic1 from "../images/sharing.jpg";
import { optionCategory, optionCType } from "../Model/optiondata";
import FetchAndDisplay from "../components/FetchAndDisplay";
import useResourceForm from "../hooks/useResourceForm";

import "../style/share.css";
import AddSharedRes from "../components/AddSharedRes";
const ShareResourcesPage = () => {
  const {
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
  } = useResourceForm();
  const resourceData = [
    { category: "HTML", title: "HTML Shared Resources" },
    { category: "CSS", title: "CSS Shared Resources" },
    { category: "JS", title: "JavaScript Shared Resources" },
    { category: "React", title: "React Shared Resources" },
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
                    Choose the Categories
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
                    The Name of Video , cources or articales
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
        {resourceData.map((data) => (
          <div
            key={data.category}
            className={`${data.category.toLowerCase()}-shared`}
          >
            <div className="box1-shared">
              <FetchAndDisplay category={data.category} title={data.title} />
            </div>
          </div>
        ))}
      </div>

      {/* <div className="shared-resources">
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
      </div> */}
    </div>
  );
};

export default ShareResourcesPage;
