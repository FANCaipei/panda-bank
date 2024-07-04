import AuthPage from "../pages/auth";
import HomePage from "../pages/home/home";
import StateMentPage from "../pages/statement/statement";

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
    path: "/statement",
    element: <StateMentPage />,
  },
];

export default routeConfig;
