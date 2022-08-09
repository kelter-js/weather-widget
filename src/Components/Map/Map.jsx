import React, { useEffect } from "react";
import axios from "axios";
import GoogleMapReact from 'google-map-react';
import { observer } from "mobx-react-lite";
import MainStore from "../../store/MainStore";

const Marker = ({ text }) => <div>{text}</div>;

const Map = observer(({ coords }) => {
  const prefabCoordinates = coords;

  if (String(prefabCoordinates.lat).length < 10) {
    prefabCoordinates.lat += "0";
    prefabCoordinates.lat = +prefabCoordinates.lat;
  }

  useEffect(() => {
    axios
      .get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${coords.lat},${coords.lng}&sensor=true&key=AIzaSyDJkD4mUKMBXM5WU61f3N415kJznUCQGys`)
      .then((res) => {
        MainStore.setLocationData(res.data.results[0].formatted_address);
      })
  }, [coords]);

  return (
    <div style={{ height: '40vh', width: '100%', gridRow: "2 / 3", gridColumn: "2 / 3" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDJkD4mUKMBXM5WU61f3N415kJznUCQGys" }}
        center={prefabCoordinates}
        yesIWantToUseGoogleMapApiInternals
        defaultZoom={13}
      >
        <Marker
          lat={prefabCoordinates.lat}
          lng={prefabCoordinates.lng}
          text="You are here"
        />
      </GoogleMapReact>
    </div>
  );
});

export default Map;