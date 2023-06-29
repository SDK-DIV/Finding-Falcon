import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "../App";
import NotFound from "../NotFound";
import Result from "../Result";
import ErrorNotification from "../ErrorNotification";

export default function Routers() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" componet={App} />
          <Route exact path="/result" componet={Result} />
          <Route exact path="/error" componet={ErrorNotification} />
          <Route exact componet={NotFound} />
        </Routes>
      </div>
    </Router>
  );
}
