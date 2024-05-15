import { NextUIProvider } from "@nextui-org/react";
import routeConfig from "../routes/routeConfig";
import { BrowserRouter, useRoutes } from "react-router-dom";
import Header from "../components/header";

const AppContent = () => {
  // routes define
  const element = useRoutes(routeConfig);

  return <div className='px-[20px] lg:px-[34px]'>{element}</div>;
};

const App = () => {
  return (
    <BrowserRouter>
      <NextUIProvider>
        <Header />
        <AppContent />
      </NextUIProvider>
    </BrowserRouter>
  );
};

export default App;
