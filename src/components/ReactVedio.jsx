import imageBox1 from "../images/reactblue.png";
import imageBox4 from "../images/react=box4.png";
import { youtubeLinks } from "../Model/reactResources";
import { udemyLinks } from "../Model/reactResources";
import VideoLinksAndUdemy from "./VideoLinksAndUdemy";
import "../style/htmlpage.css";

const ReactVedio = () => {
  return (
    <VideoLinksAndUdemy
      image1={imageBox1}
      image2={imageBox4}
      youtubeLinks={youtubeLinks}
      udemyLinks={udemyLinks}
    />
  );
};

export default ReactVedio;
