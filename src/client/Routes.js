import React from "react";
import App from "./App";
import Home from "./pages/Home";
import Setting from "./pages/Setting";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

export default [
  {
    ...App,
    routes: [
      {
        ...Home,
        path: "/",
        exact: true,
        name: "首頁",
      },
      {
        ...Setting,
        path: "/setting",
        name: "設定",
      },
      {
        ...Login,
        path: "/login",
        name: "登入",
      },
      { ...NotFound },
    ],
  },
];
