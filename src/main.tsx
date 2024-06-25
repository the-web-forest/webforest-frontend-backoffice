import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "@/router";
import "./global.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Suspense fallback="">
      {/* TODO: LOADING BUNITO */}
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>,
);
