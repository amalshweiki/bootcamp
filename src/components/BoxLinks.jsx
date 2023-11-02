import React from "react";
import { Link } from "react-router-dom";
const BoxLinks = ({ links }) => {
  return (
    <div>
      <div>
        {links.map((link, index) => (
          <div key={link.id}>
            <ul>
              <li>
                {link.id} . {link.name}
              </li>
              <li>
                <Link to={link.URL}>click here </Link>
              </li>
            </ul>
            <p></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoxLinks;
