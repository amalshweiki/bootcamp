import "../style/homepage.css";
import { useEffect, useState } from "react";
import { myQuotes } from "../Model/homedata";
import pic1 from "../images/html-css-collage-concept.jpg";
import { Link } from "react-router-dom";
const HomePageContanier1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % myQuotes.length);
    }, 6000);
    return () => clearInterval(intervalId);
  }, [myQuotes.length]);

  return (
    <>
      <div className="container">
        <div className="container">
          <div className="shape">
            <span className="dot "></span>
            <img className="pic1 fade-in" src={pic1} />

            <svg
              className="svg"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#BFDDE5"
                d="M157.4,45.5c11.3-39.1-16.3-50.2-43.8-43.8c-25.2,5.8-35.5,17.2-61,16.5C21.7,17.4,0,39.8,0,71.3
            c0,49.1,58.2,47.8,76.2,68.5c38.8,44.7,92.8,8.2,79.3-40.3C148.1,73.2,155.9,50.6,157.4,45.5z"
              />
            </svg>
            <h1 className="title fade-in ">
              Jerusalem <br />
              BootCamp
            </h1>
            <h6 className="subTitle">
              Code Foundations Start your programming journey with an
              introduction to the world of code and basic concepts.
            </h6>
            <p className="quote">{myQuotes[currentIndex]}</p>
            <Link to="/login">
              <button className="button">log in </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePageContanier1;
