// in this file we going to setup the main router for the application

import { createBrowserRouter } from "react-router-dom";
import App from "../../App.jsx";

//importing the pages to be linked in the router

import AboutPage from "../../pages/About/Aboutpage.jsx";
import ContactPage from "../../pages/Contact/Contactpage.jsx";
import HomePage from "../../pages/Home/Homepage.jsx";
import PortfolioPage from "../../pages/Projects/Projectpage.jsx";
import SkillsPage from "../../pages/Skills/Skillspage.jsx";

// generating the router object providing array of 'path - page' pairs.
// this helps store the mapping of each path to their respective pages to
// be loaded when we visit that path in website.

const my_router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/portfolio",
        element: <PortfolioPage />,
      },
      {
        path: "/Skills",
        element: <SkillsPage />,
      },
      {
        path: "/Contact",
        element: <ContactPage />,
      },
    ],
  },
]);

export default my_router;
