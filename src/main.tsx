import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "@/router";
import "./index.css";
import { Input } from "@/components/ui/input";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Input type="email" placeholder="Email" />
    <RouterProvider router={router} />
  </React.StrictMode>,
);
