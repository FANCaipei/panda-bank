import AuthPage from "../pages/auth";
import HomePage from "../pages/home/home";
import Page1 from "../pages/page1";

const routeConfig = [
  {
    path: "/",
    element: <AuthPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/page1",
    element: <Page1 />,
  },
];

export default routeConfig;
