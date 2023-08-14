import React from "react";
import { renderRoutes } from "react-router-config";

const App = ({ location, route }) => (
  <div className="d-flex">
    <main
      className={`position-relative${
        location.pathname !== "/login" ? " outer-container" : " login-bg"
      }`}
    >
      {renderRoutes(route.routes)}
    </main>
  </div>
);

export default {
  component: App,
};
