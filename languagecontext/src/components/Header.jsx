import React from "react";
import { useLanguage } from "./LanguageContext";

const Header = () => {
  const { language, switchLanguage } = useLanguage();
  return (
    <header>
      <h1>{language === "pt" ? "Olá mundo!" : "Hello, World!"}</h1>
      <button onClick={switchLanguage}>
        {language === "pt" ? "Mudar para inglês" : "Switch Portuguese"}
      </button>
    </header>
  );
};

export default Header;
