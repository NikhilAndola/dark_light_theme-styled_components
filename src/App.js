import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes";

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

export default function App() {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp>
        <h2>Hello world!</h2>
        <button onClick={() => themeToggler()}>change theme</button>
      </StyledApp>
    </ThemeProvider>
  );
}
