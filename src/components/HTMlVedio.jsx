import imageBox1 from "../images/online-education-millennial.jpg";
import imageBox4 from "../images/programming-work-place-desk.jpg";
import { youtubeLinks } from "../Model/htmlResources";
import { udemyLinks } from "../Model/htmlResources";
import VideoLinksAndUdemy from "./VideoLinksAndUdemy";
import "../style/htmlpage.css";
const HTMlVedio = () => {
  return (
    <VideoLinksAndUdemy
      image1={imageBox1}
      image2={imageBox4}
      youtubeLinks={youtubeLinks}
      udemyLinks={udemyLinks}
    />
  );
};

export default HTMlVedio;
