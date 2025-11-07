import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export default function ThemeToggle() {
  const [theme, setTheme] = useState("dark");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeChild />
    </ThemeContext.Provider>
  );
}

function ThemeChild() {
  const { theme, setTheme } = useContext(ThemeContext);
  const toggleTheme = () =>
    setTheme(theme === "dark" ? "light" : "dark");

  return (
    <div className={`card ${theme}`}>
      <h3>Context API Example</h3>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}
