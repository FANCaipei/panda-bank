import { NextUIProvider } from "@nextui-org/react";
import routeConfig from "../routes/routeConfig";
import { BrowserRouter, useRoutes } from "react-router-dom";

const AppContent = () => {
  // routes define
  const element = useRoutes(routeConfig);

  return element;
};

const App = () => {
  return (
    <BrowserRouter>
      <NextUIProvider className='h-full'>
        <AppContent />
      </NextUIProvider>
    </BrowserRouter>
  );
};

export default App;
