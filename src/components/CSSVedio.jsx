import imageBox1 from "../images/css-youtube.jpg";
import imageBox4 from "../images/home-hero.jpg";
import { youtubeLinks } from "../Model/CSSResources";
import { udemyLinks } from "../Model/CSSResources";
import VideoLinksAndUdemy from "./VideoLinksAndUdemy";
import "../style/htmlpage.css";

const CSSVedio = () => {
  return (
    <VideoLinksAndUdemy
      image1={imageBox1}
      image2={imageBox4}
      youtubeLinks={youtubeLinks}
      udemyLinks={udemyLinks}
    />
  );
};

export default CSSVedio;
