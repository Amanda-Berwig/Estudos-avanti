import "./App.css";
import Content from "./components/Content";
import Header from "./components/Header";
import { ThemeProvider, useTheme } from "./components/ThemeContext";

const ThemedApp = () => {
  const { theme } = useTheme();
  return (
    <div className={`app ${theme}`}>
      <Header></Header>
      <Content></Content>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <ThemedApp></ThemedApp>
    </ThemeProvider>
  );
}

export default App;
