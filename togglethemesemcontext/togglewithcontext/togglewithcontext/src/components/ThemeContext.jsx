import React, { createContext, useState, useContext } from "react";

// 1. Cria o contexto
//Esse contexto será responsável por guardar e fornecer o valor do tema (light ou dark).
const ThemeContext = createContext();

// 2. Cria o Provider para envolver a aplicação
//Ele vai envolver os componentes filhos da aplicação e permitir que o valor do contexto esteja disponível para eles.
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

//hook que faz o consumer, pra poder passar pros outros componentes
//3. Hook personalizado para consumir o contexto
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme deve ser usado com o ThemeProvider");
  }
  return context;
};
