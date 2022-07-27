import React, { useEffect } from "react";
import getTheme from './Theme/theme';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from 'styled-components';
import { observer } from "mobx-react-lite";
import themeStore from './store/themeStore';
import StyledApp from "./StyledApp";

const App = observer(() => {
  const theme = createTheme(getTheme(themeStore.mode));

  useEffect(() => {
    setTimeout(() => {
      themeStore.setMode(false);
    }, 50000);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <StyledApp theme={theme} />
    </ThemeProvider>
  );
});

export default App;
