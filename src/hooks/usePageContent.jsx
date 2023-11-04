import { useState } from "react";

function usePageContent() {
  const [showVedio, setShowVedio] = useState(false);
  const [showArtical, setShowArtical] = useState(false);
  const [textVisible, setTextVisible] = useState(true);

  const toggleVedio = () => {
    setShowVedio(!showVedio);
    setShowArtical(false);
    setTextVisible(false);
  };

  const toggleArtical = () => {
    setShowArtical(!showArtical);
    setShowVedio(false);
    setTextVisible(false);
  };

  return {
    showVedio,
    showArtical,
    textVisible,
    toggleVedio,
    toggleArtical,
  };
}

export default usePageContent;
