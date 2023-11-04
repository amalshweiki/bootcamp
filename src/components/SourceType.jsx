import "../style/htmlpage.css";

const SourceType = ({ image, togglebutton, typeResource }) => {
  return (
    <div className="img-Sources">
      <div className="img-inner-Sources">
        <div className="inner-skew-Sources">
          <img src={image} />
          <h3 className="title-resorces">{typeResource}</h3>
          <button onClick={togglebutton} className=" button btn-seeMore">
            See More
          </button>
        </div>
      </div>
    </div>
  );
};

export default SourceType;
