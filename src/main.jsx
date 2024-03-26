import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

import NotFound from "./pages/NotFoundPage/NotFound";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
    errorElement: <NotFound />,
  },
  {
    path: "/projects",
    element: <ProjectsPage />,
  }

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
