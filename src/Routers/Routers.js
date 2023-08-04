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
          <Route path="/" element={<App />} />
          <Route path="/result" element={<Result />} />
          <Route path="/error" element={<ErrorNotification />} />
          <Route element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}
