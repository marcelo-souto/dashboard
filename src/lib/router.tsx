import { createBrowserRouter } from "react-router";

import { HomePage } from "@/pages/home";
import { Dashboard } from "@/pages/dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

export { router };
