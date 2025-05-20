import React from "react";

function Header({ theme, toggleTheme }) {
  return (
    <header>
      <h1>App theme: {theme}</h1>
      <button onClick={toggleTheme}>Toggle theme</button>
    </header>
  );
}

export default Header;
