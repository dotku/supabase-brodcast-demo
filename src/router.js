import { createHashRouter } from "react-router-dom";
import Support from "./Support";
import Home from "./Home";

export const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/support",
    element: <Support />,
  },
]);
