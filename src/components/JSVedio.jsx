import imageBox1 from "../images/box1js.png";
import imageBox4 from "../images/js-Proaming.png";
import { youtubeLinks } from "../Model/JSResources";
import { udemyLinks } from "../Model/JSResources";
import VideoLinksAndUdemy from "./VideoLinksAndUdemy";
import "../style/htmlpage.css";

const JSVedio = () => {
  return (
    <VideoLinksAndUdemy
      image1={imageBox1}
      image2={imageBox4}
      youtubeLinks={youtubeLinks}
      udemyLinks={udemyLinks}
    />
  );
};

export default JSVedio;
