import { Navigate } from "react-router-dom";
import Home from "../pages/Home/Home.page";
import Form1 from "../pages/Home/Forms/Form/Form.page";
import EditForm from "../pages/Home/Forms/EditForm/EditForm.page";
import ErrorPage from "../pages/Error/Error.page";

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
  {
    name: "Edit Form",
    path: "/editForm",
    element: <EditForm />,
  },
];

export default LoginRoutes;
