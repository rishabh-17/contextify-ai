import React from "react";
import { useRoutes } from "react-router-dom";
import NotFound from "pages/NotFound";
import HomePage from "pages/HomePage";
import About from "pages/About";
import ContactUs from "pages/ContactUs";
import Pricing from "pages/Pricing";
import Two from "pages/Two";
import Three from "pages/Three";
import One from "pages/One";
import AdminDashboard from "pages/AdminDashboard";
// import Dashboard from "pages/Dashboard";
import Dashboard from "pages/Clientdashboard";

const ProjectRoutes = () => {
  let element = useRoutes([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "about",
      element: <About />,
    },
    {
      path: "contactus",
      element: <ContactUs />,
    },
    {
      path: "pricing",
      element: <Pricing />,
    },
    {
      path: "two",
      element: <Two />,
    },
    {
      path: "three",
      element: <Three />,
    },
    {
      path: "one",
      element: <One />,
    },
    {
      path: "admindashboard",
      element: <AdminDashboard />,
    },
    {
      path: "dashboard",
      element: <Dashboard />,
    },
    { path: "*", element: <NotFound /> },
  ]);

  return element;
};

export default ProjectRoutes;
