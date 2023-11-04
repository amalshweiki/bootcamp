import "@fortawesome/fontawesome-free/css/all.min.css";

import { useState } from "react";
import JSVedio from "../components/JSVedio";
import JSArticls from "../components/JSArticls";
import { JSPAGEDATA } from "../Model/dataForPages";
import Page from "../components/Page";

import "../style/htmlpage.css";
const JSPage = () => {
  const [jspageData, setjsPageDatA] = useState(JSPAGEDATA);

  return (
    <div>
      <Page
        PageData={jspageData}
        VedioComponent={<JSVedio />}
        ArticalsComponent={<JSArticls />}
      />
    </div>
  );
};

export default JSPage;
