import React from "react";
import { ThemeProvider } from '@mui/material/styles';
import GlobalStyles from "./Theme/global";
import { observer } from "mobx-react-lite";
import Container from "./Common/Container/Container";
import Main from "./Components/Main/Main";
import MainStore from "./store/MainStore";
import Map from "./Components/Map/MapContainer";
import SearchBar from "./Components/SearchBar/SearchBar";

const StyledApp = observer(({ theme }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Main>
        <Container>
          <SearchBar
            value={MainStore.city ? MainStore.city : ""}
            label="Your location"
            onPlaceSelect={(place) => {
              MainStore.setCity(place.address);
              MainStore.setLocation({
                lat: +Number(place.lat).toFixed(7),
                lng: +Number(place.lng).toFixed(7),
              });
            }}
            name="yourCity"
            placeholder="Somewhere in Russia"
            autocomplete="off"
          />
          <Map />
        </Container>
      </Main>
    </ThemeProvider>
  );
});

export default StyledApp;
