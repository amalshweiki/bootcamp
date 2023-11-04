import "@fortawesome/fontawesome-free/css/all.min.css";
import { useState } from "react";
import HTMlVedio from "../components/HTMlVedio";
import HTMLArticals from "../components/HTMLArticals";
import { HTMLPAGEDATA } from "../Model/dataForPages";
import Page from "../components/Page";
import "../style/htmlpage.css";

const HTMLPage = () => {
  const [htmlpageData, sethtmlPageDatA] = useState(HTMLPAGEDATA);

  return (
    <div>
      <Page
        PageData={htmlpageData}
        VedioComponent={<HTMlVedio />}
        ArticalsComponent={<HTMLArticals />}
      />
    </div>
  );
};

export default HTMLPage;
