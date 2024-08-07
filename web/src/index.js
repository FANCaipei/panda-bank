import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTransDatas from "./i18n/en/index";
import zhTransDatas from "./i18n/zh/index";
import App from "./pages/app";

// i18n
i18n.use(initReactI18next).init({
  resources: {
    en: enTransDatas,
    zh: zhTransDatas,
  },
  lng: "zh",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // don't use stric mode, or usecall will be called twice (> REACT18)
  // https://www.techiediaries.com/react-18-useeffect/#:~:text=The%20standard%20behavior%20of%20the,effect%20twice%20instead%20of%20once.
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
