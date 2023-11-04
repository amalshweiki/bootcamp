import "@fortawesome/fontawesome-free/css/all.min.css";
import { useState } from "react";
import ReactVedio from "../components/ReactVedio";
import ReactArticls from "../components/ReactArticls";
import Page from "../components/Page";
import { REACTPAGEDATA } from "../Model/dataForPages";

import "../style/htmlpage.css";
const ReactPage = () => {
  const [reactpageData, reactPageDatA] = useState(REACTPAGEDATA);

  return (
    <div>
      <Page
        PageData={reactpageData}
        VedioComponent={<ReactVedio />}
        ArticalsComponent={<ReactArticls />}
      />
    </div>
  );
};

export default ReactPage;
