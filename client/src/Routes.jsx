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
import Profile from "pages/Profile";
// import Dashboard from "pages/Dashboard";
import AdminDashboard from "pages/AdminDashboard";
import Dashboard from "pages/Clientdashboard";
import SignInPage from "pages/SignIn";
import SignUpPage from "pages/SignUp";
import Subscription from "pages/Subscription";
import MyContext from "pages/MyContext";
import ContextDetail from "pages/ContextDetail";
import Support from "pages/Support";
import AllUsers from "pages/AllUsers";
import AppsPage from "pages/AppsPage";
import Policy from "pages/Policy"
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
    {
      path: "signin",
      element: <SignInPage />,
    },
    {
      path: "signup",
      element: <SignUpPage />,
    },
    {
      path: "mycontext",
      element: <MyContext />,
    },
    {
      path: "subscription",
      element: <Subscription />,
    },
    {
      path: "profile",
      element: <Profile />,
    },
    {
      path: "support",
      element: <Support />,
    },
    {
      path: "contextdetail/:type/:id",
      element: <ContextDetail />,
    },
    {
      path: "allusers",
      element: <AllUsers />,
    },
    {
      path: "apps",
      element: <AppsPage />,
    },
    {
      path: "policy",
      element: <Policy />,
    },
    { path: "*", element: <NotFound /> },
  ]);

  return element;
};

export default ProjectRoutes;
