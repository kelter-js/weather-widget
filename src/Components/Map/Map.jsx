import React from "react";
import GoogleMapReact from 'google-map-react';

const Marker = ({ text }) => <div>{text}</div>;

const Map = ({ coords }) => {
  const prefabCoordinates = coords;
  if (String(prefabCoordinates.lat).length < 10) {
    prefabCoordinates.lat += "0";
    prefabCoordinates.lat = +prefabCoordinates.lat;
  }
  return (
    <div style={{ height: '40vh', width: '100%', gridRow: "-1/-1", gridColumn: "2 / 3" }}>
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
}

export default Map;