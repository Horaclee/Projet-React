import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import Home from './pages/Home';
import PopularDesc from './pages/PopularDesc';
import PopularMovie from './pages/PopularMovie';
import Toprated from './pages/Toprated';
import TopratedDescription from './pages/TopRatedDescription';

import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path:"/popularmovie",
    element: <PopularMovie/>,
  },
  {
    path:"/populardesc/:id",
    element: <PopularDesc/>,
  },
  {
    path:"/toprated",
    element: <Toprated/>,
  },
  {
    path:"/toprateddesc/:id",
    element: <TopratedDescription/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);