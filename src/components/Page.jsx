import SourceType from "../components/SourceType";
import usePageContent from "../hooks/usePageContent";
import linklogo from "../images/link-logo.png";
import weblogo from "../images/websites.jpg";
import pdflogo from "../images/pdf-logo.png";
import { useState } from "react";
import TextVisible from "./TextVisible";
import "../style/htmlpage.css";

const Page = ({ VedioComponent, ArticalsComponent, PageData }) => {
  const { showVedio, showArtical, textVisible, toggleVedio, toggleArtical } =
    usePageContent();
  const SOURCETYPE = [
    {
      image: linklogo,
      togglebutton: toggleVedio,
      typeResource: "Video Resources",
    },
    {
      image: weblogo,
      togglebutton: toggleArtical,
      typeResource: "Articles Resources",
    },
    {
      image: pdflogo,
      togglebutton: toggleArtical,
      typeResource: "PDF Resources",
    },
  ];
  const [sourcetype, setSourcetype] = useState(SOURCETYPE);
  return (
    <div>
      <h1 className="html-title">{PageData.title}</h1>
      <h3 className="html-subTitle">{PageData.subtitle}</h3>

      <div className="allSources">
        <div className="Sources1">
          {sourcetype.map((item, index) => (
            <SourceType
              key={index}
              image={item.image}
              togglebutton={item.togglebutton}
              typeResource={item.typeResource}
            />
          ))}
          <div className="text-container-Sources">
            {textVisible && (
              <div>
                <TextVisible />
              </div>
            )}
            {showVedio && VedioComponent}
            {showArtical && ArticalsComponent}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
