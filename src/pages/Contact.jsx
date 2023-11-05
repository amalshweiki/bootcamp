import cotact from "../images/contactus.jpg";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

import "../style/cotact.css";
const Contact = () => {
  return (
    <div className="flex-container">
      <div className="about-text">
        <h1>
          Contact Us <br /> Jerusalem Bootcamp
        </h1>
        <p>
          If you have any questions, suggestions, or feedback, don't hesitate to
          get in touch with us. We're always here to help you on your
          educational journey. [Insert Contact Information] Thank you for
          choosing Jerudalem Bootcamp as your trusted resource for HTML, CSS,
          JavaScript, and React. We look forward to helping you achieve your web
          development goals.
        </p>
        <div>
          {" "}
          <div className="contact-icon">
            <div>
              <i className="fa fa-map-marker "></i>
              <p>
                <span>Jerusalem</span> Mount of olvies
              </p>
            </div>

            <div>
              <i className="fa fa-phone"></i>
              <p>+1.555.555.5555</p>
            </div>

            <div>
              <i className="fa fa-envelope"></i>
              <p>
                <Link to="mailto:support@company.com">
                  jerusalem@company.com
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img className="image-contact" src={cotact} />
      </div>
    </div>
  );
};

export default Contact;
