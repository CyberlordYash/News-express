import React, { useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
const alanKey =
  "f7006035e0df6e7ffd93e9cddfa0761b2e956eca572e1d8b807a3e2338fdd0dc/stage";
const App = () => {
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: (command) => {
        if (command === "testCommand") {
          alert("This is a test");
        }
      },
    });
  }, []);
  return <div>News Express </div>;
};
export default App;
