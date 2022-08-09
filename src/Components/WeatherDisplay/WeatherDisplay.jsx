import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import MainStore from "../../store/MainStore";
import axios from "axios";
import getIcon from "../../Utils/iconProvider";

const WeatherDisplay = observer(() => {
  const getFormattedCoordinates = (coordinates) => {
    return {
      lat: (+coordinates.lat).toFixed(1),
      lng: (+coordinates.lng).toFixed(1),
    };
  };
  useEffect(() => {
    if (MainStore.locationSelected) {
      const { lat, lng } = getFormattedCoordinates(MainStore.location);
      axios
        .get(`
        https://www.meteosource.com/api/v1/free/point?lat=${lat}&lon=${lng}&sections=all&timezone=UTC&language=en&units=metric&key=l4mhpv69bw7427d07cq70mbki1pfq4dl0qymnc0k
      `)
        .then((res) => MainStore.setWeatherData(res.data.daily.data));
    }
  }, [MainStore.locationSelected]);

  console.log(MainStore.weatherData)

  return (
    <div style={{ gridRow: "1 / 2", gridColumn: "2 / 3" }}>
      {MainStore.weatherDataFilled && (
        <img height={100} width={100} alt='weather image' aria-hidden={true} src={getIcon(MainStore.weatherData[0].icon)}/>
      )}
    </div>
  );
});

export default WeatherDisplay;