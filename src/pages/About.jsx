import about from "../images/about us.jpg";
import "../style/about.css";
const About = () => {
  return (
    <div className="flex-container">
      <div className="about-text">
        <h1>About Us (Jerusalem Bootcamp)</h1>
        <p>
          Welcome to Jerusalem Bootcamp, your one-stop destination for
          comprehensive resources in the world of web development, designed to
          help students excel in their bootcamps, specifically focusing on HTML,
          CSS, JavaScript, and React.
        </p>
        <h3>Our Mission</h3>
        <p>
          Our mission is to empower aspiring web developers, whether they are
          beginners or looking to enhance their skills, with the knowledge and
          tools needed to succeed in their bootcamps and future careers. We
          understand the challenges that come with mastering web development
          technologies, and we are committed to making this journey as
          accessible and enjoyable as possible.
        </p>
        <h3>
          What We Offer <br /> Learning Resources
        </h3>
        <p>
          HTML, CSS, JavaScript, and React Jerusalem Bootcamp offers a rich
          collection of resources and tutorials on HTML, CSS, JavaScript, and
          React. Whether you are just starting or looking to deepen your
          knowledge, we have you covered. Our content is structured to cater to
          various learning levels, from beginner to advanced.
        </p>
      </div>
      <div className="svg-container fade-in-left">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
          xml:space="preserve"
          className="u-svg-content-about  "
          viewBox="0 0 160 150"
          x="px"
          y="0px"
          id="svg-1073"
        >
          <path
            fill="#6dadbf"
            d="M43.2,126.9c14.2,1.3,27.6,7,39.1,15.6c8.3,6.1,19.4,10.3,32.7,5.3c11.7-4.4,18.6-17.4,21-30.2c2.6-13.3,8.1-25.9,15.7-37.1
	c8.3-12.1,10.8-27.9,5.3-42.7C150.5,20.3,134.6,9,117,7.6C107.9,6.9,98.8,5,90.1,1.9C83-0.6,75-0.7,67.4,2.1
	c-9.9,3.7-17,11.6-20.1,21c-3.3,10.1-10.9,18-20.6,22.2c-0.1,0-0.1,0.1-0.2,0.1c-20.3,8.9-31,32-24.6,53.2
	C6.9,115.6,25.2,125.2,43.2,126.9z"
          ></path>
        </svg>
        <span className="dot-about fade-in-left"></span>
        <span className="dot-about2 fade-in-left"></span>
        {/* <span className="dot-about3 "></span> */}
        <img className="image-about" src={about} />
      </div>
    </div>
  );
};

export default About;
