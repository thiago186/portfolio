import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from "react-router-dom";
import "./index.css";

import AboutMePage from "./pages/AboutMePage/AboutMePage";
import Navbar from "./components/Navbar/Navbar";
import NotFound from "./pages/NotFoundPage/NotFound";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import SingleProjectPage from "./pages/SingleProjectPage/SingleProjectPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: < Navigate to="/projects" replace/>,
    errorElement: <NotFound />,
  },
  {
    path: "/projects",
    element: <ProjectsPage />,
  },
  {
    path: "/aboutMe",
    element: <AboutMePage />,
  },
  {
    path: "/projects/:projectId",
    element: <SingleProjectPage />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
