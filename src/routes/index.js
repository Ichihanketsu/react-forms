import { Navigate } from "react-router-dom";
import ErrorPage from "../pages/Error/Error.page";
import Home from "../pages/Home/Home.page";
import Form1 from "../pages/Home/Forms/Form/Form.page";

const LoginRoutes = [
  {
    path: "",
    element: <Navigate to="/home" />,
    errorElement: <ErrorPage />,
  },
  {
    path: "*",
    element: <Navigate to="/home" />,
    errorElement: <ErrorPage />,
  },
  {
    name: "Home",
    path: "/home",
    element: <Home />,
  },
  {
    name: "Form",
    path: "/form",
    element: <Form1 />,
  },
];

export default LoginRoutes;
