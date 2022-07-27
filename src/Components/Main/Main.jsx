import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import MainStore from "../../store/MainStore";

const Main = observer(({ children }) => {

  const setCoords = (location) => {
    MainStore.setLocation({
      lat: location.coords.latitude,
      lng: location.coords.longitude
    });
  };

  useEffect(() => {
    if (Object.keys(window.navigator.geolocation).length !== 0) {
      setCoords(window.navigator.geolocation)
    } else {
      window.navigator.geolocation.getCurrentPosition(setCoords);
    }
  }, []);

  return (
    <main>
      {children}
    </main>
  );
});

export default Main;
