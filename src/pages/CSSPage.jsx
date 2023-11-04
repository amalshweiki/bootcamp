import "@fortawesome/fontawesome-free/css/all.min.css";
import { useState } from "react";
import CSSVedio from "../components/CSSVedio";
import CSSArticals from "../components/CSSArticals";
import { CSSPAGEDATA } from "../Model/dataForPages";
import Page from "../components/Page";
import "../style/htmlpage.css";
const CSSPage = () => {
  const [csspageData, setcsslPageDatA] = useState(CSSPAGEDATA);

  return (
    <div>
      <Page
        PageData={csspageData}
        VedioComponent={<CSSVedio />}
        ArticalsComponent={<CSSArticals />}
      />
    </div>
  );
};

export default CSSPage;
