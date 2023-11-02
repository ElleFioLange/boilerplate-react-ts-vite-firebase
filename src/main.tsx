import React from "react";
import ReactDOM from "react-dom/client";

import { initializeApp } from "firebase/app";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "@/globals.css";

import Landing from "@/pages/Landing";

import { ProtectedRoutes } from "@/components/util/UserProvider";
import ErrorElement from "@/components/util/ErrorElement";
import { GlobalProvider } from "./components/util/GlobalProvider";

// REPLACE WITH YOUR FIREBASE CONFIG
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: "",
};
initializeApp(firebaseConfig);

const router = createBrowserRouter([
  {
    errorElement: <ErrorElement />,
    path: "/",
    children: [
      {
        element: <ProtectedRoutes />,
        children: [],
      },
      {
        path: "/",
        element: <Landing />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalProvider>
      <ToastContainer />
      <RouterProvider router={router} />
    </GlobalProvider>
  </React.StrictMode>
);
