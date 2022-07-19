import React from "react";
import GoogleMapReact from 'google-map-react';

const Marker = ({ text }) => <div>{text}</div>;

const Map = ({ coords }) => {
  return (
    <div style={{ height: '40vh', width: '50%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDJkD4mUKMBXM5WU61f3N415kJznUCQGys" }}
        defaultCenter={coords}
        yesIWantToUseGoogleMapApiInternals
        defaultZoom={13}
      >
        <Marker
          lat={coords.lat}
          lng={coords.lng}
          text="You are here"
        />
      </GoogleMapReact>
    </div>
  );
}

export default Map;