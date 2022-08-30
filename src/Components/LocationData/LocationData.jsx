import React from "react";
import { observer } from "mobx-react-lite";
import MainStore from "../../store/MainStore";
import LocationContainer from "./LocationContainer";

const LocationData = observer((props) => {
  return (
    <LocationContainer>
      <p>
        Your current approximate location is: {MainStore.locationData}
      </p>
    </LocationContainer>
  );
});

export default LocationData;