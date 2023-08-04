import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Routers from "./Routers/Routers";
import * as serviceWorker from "./serviceWorker";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";

const store = configureStore();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Routers />
    </Provider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import Routers from "./Routers/Routers";
// import * as serviceWorker from "./serviceWorker";
// import configureStore from "./store/configureStore";
// import { Provider } from "react-redux";
// const root = ReactDOM.createRoot(document.getElementById("root"));
// const store = configureStore();
// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <Routers />
//     </Provider>
//   </React.StrictMode>
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
