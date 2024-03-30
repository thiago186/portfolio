import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from "react-router-dom";
import "./index.css";

import NotFound from "./pages/NotFoundPage/NotFound";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import AboutMePage from "./pages/AboutMePage/AboutMePage";
import Navbar from "./components/Navbar/Navbar";


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
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
