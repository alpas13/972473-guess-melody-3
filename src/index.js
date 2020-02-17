import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import mocks from "./mocks/questions";

const Settings = {
  ERRORS_COUNT: 3
};

ReactDOM.render(
    <App
      errorsCount={Settings.ERRORS_COUNT}
      questions={mocks}
    />,
    document.querySelector(`#root`)
);
