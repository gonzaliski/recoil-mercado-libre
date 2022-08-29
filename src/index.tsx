import React,{Suspense} from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { AppRoutes } from "./router/router";
ReactDOM.render(
  <Suspense fallback={null}>

  <RecoilRoot>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </RecoilRoot>
  </Suspense>,
  document.getElementById("root")
);
