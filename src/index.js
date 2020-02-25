import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import App from "./components/app/app.jsx";
import mocks from "./mocks/questions";
import {reducer} from "./reducer";

const Settings = {
  ERRORS_COUNT: 3
};

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
      <App
        errorsCount={Settings.ERRORS_COUNT}
        questions={mocks}
      />
    </Provider>,
    document.querySelector(`#root`)
);
