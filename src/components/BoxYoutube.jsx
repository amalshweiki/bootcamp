import React from "react";
import { useState, useEffect } from "react";
import "../style/htmlpage.css";
const BoxYoutube = ({ links }) => {
  const [openVideoIndex, setOpenVideoIndex] = useState(null);
  const openVideo = (index) => {
    setOpenVideoIndex(index);
  };

  const closeVideo = () => {
    setOpenVideoIndex(null);
  };

  return (
    <div>
      {links.map((link, index) => (
        <div key={link.id}>
          <ul>
            <li>
              {link.id} . {link.name}
            </li>
            <li>
              <button
                className=" button btn-seeMore "
                onClick={() => openVideo(link.id)}
              >
                Open Video
              </button>
              {openVideoIndex === link.id && (
                <div className="video-container">
                  <button
                    onClick={() => closeVideo()}
                    className="button close-button"
                  >
                    X
                  </button>
                  <iframe
                    className="iframe"
                    width="420"
                    height="315"
                    src={link.URL}
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default BoxYoutube;
