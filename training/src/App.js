import React from 'react';
import './style.css';
import 'bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';
import Popper from 'popper.js';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ErrorPage from "./page/error-page";
import Home from "./page/home/home";


export default function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: 
      
      <Home/>
      
      ,
      errorElement: <ErrorPage />,
      }
  ]);

  return(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  );
}

