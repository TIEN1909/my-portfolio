import React, { useState, useEffect } from "react";
import "./components/Style/App.css";
import {
  Home,
  Header,
  About,
  Skills,
  Qualification,
  Projects,
  Contact,
  Footer,
  ScrollUp,
  contextDarkMod,
  Cursor,
} from "./components";

const App: React.FC = () => {
  const [IsdarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleIsDarkMode = (): void => {
    localStorage.setItem("isDarkMode", JSON.stringify(!IsdarkMode));
    setIsDarkMode(!IsdarkMode);
  };

  useEffect(() => {
    const isDark: boolean = localStorage.getItem("isDarkMode") === "true";
    setIsDarkMode(isDark);
  }, [IsdarkMode]);

  return <>Thahf Tién</>;
};

export default App;
