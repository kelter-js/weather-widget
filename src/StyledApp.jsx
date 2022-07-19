import React from "react";
import { Button, Typography } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
import GlobalStyles from "./Theme/global";
import { observer } from "mobx-react-lite";
import Container from "./Common/Container/Container";
import Main from "./Components/Main/Main";
import Map from "./Components/Map/MapContainer";

const StyledApp = observer(({ theme }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Main>
        <Container>
          <div>
            <Typography variant="h2" gutterBottom>
              Welcome to React
            </Typography>
            <Button variant="contained" color="secondary">Ready To Go</Button>
          </div>
          <Map />
        </Container>
      </Main>
    </ThemeProvider>
  );
});

export default StyledApp;
