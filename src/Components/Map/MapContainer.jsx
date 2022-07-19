import React from "react";
import { observer } from "mobx-react-lite";
import MainStore from "../../store/MainStore";
import Map from "./Map";

const MapContainer = observer(() => {
  return MainStore.locationSelected ? (
    <Map coords={MainStore.location} />
  ) : null;
});

export default MapContainer;
