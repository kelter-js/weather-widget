import React from "react";
import { observer } from "mobx-react-lite";
import MainStore from "../../store/MainStore";

const LocationData = observer((props) => {
  return (
    <div style={{ gridRow: "2 / 3", gridColumn: "1 / 2" }}>
      <p>
        Your current approximate location is: {MainStore.locationData}
      </p>
    </div>
  );
});

export default LocationData;