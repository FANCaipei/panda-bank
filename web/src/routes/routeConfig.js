import AuthPage from "../pages/auth";
import BankSettingPage from "../pages/bankSetting/bankSetting";
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
  {
    path: "/bank-setting",
    element: <BankSettingPage />,
  },
];

export default routeConfig;
