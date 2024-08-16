import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import { adminRouts } from "./admin.routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/admin",
    element: <App />,
    children: adminRouts,
  },
  // {
  //   path: "/faculty",
  //   element: <App />,
  //   children: adminRouts,
  // },
  // {
  //   path: "/student",
  //   element: <App />,
  //   children: adminRouts,
  // },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "login",
    element: <Login />,
  },
]);

export default router;
