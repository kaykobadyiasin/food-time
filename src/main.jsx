import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main.jsx';
import Blog from './components/Blog/Blog.jsx';
import AboutUs from './components/AboutUs/AboutUs.jsx';
import EN from './components/EN/EN.jsx';
import Error from './components/Error/Error.jsx';
import Home from './components/Home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/blog',
        element: <Blog></Blog>,
      },
      {
        path: '/aboutUs',
        element: <AboutUs></AboutUs>,
      },
      {
        path: '/en',
        element: <EN></EN>,
      },
      {
        path: '*',
        element: <Error></Error>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
