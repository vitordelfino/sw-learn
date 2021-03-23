import React, { useCallback, useState } from "react";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Sidenav from "./components/Sidenav";
import SwitchTheme from "./components/SwitchTheme";
import theme from "./styles/theme";
import GlobalStyle from "./styles/global";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import { ReactQueryDevtools } from "react-query-devtools";
import { MonterPaginationProvider } from "./context/monters-pagination";

function App() {
  const [appTheme, setTheme] = useState(theme.dark);
  const [themeSelected, setThemeSelected] = useState<"light" | "dark">("dark");
  const onDark = useCallback(() => {
    setTheme(theme.dark);
    setThemeSelected("dark");
  }, []);

  const onLight = useCallback(() => {
    setTheme(theme.light);
    setThemeSelected("light");
  }, []);
  return (
    <div className="App">
      <ReactQueryDevtools initialIsOpen />
      <ThemeProvider theme={appTheme}>
        <GlobalStyle />
        <Router>
          <Header>
            <Sidenav />
            <SwitchTheme
              onDark={onDark}
              onLight={onLight}
              checked={themeSelected}
            />
          </Header>
          <MonterPaginationProvider>
            <Routes />
          </MonterPaginationProvider>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
