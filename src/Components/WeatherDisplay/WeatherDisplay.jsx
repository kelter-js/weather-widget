import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import MainStore from "../../store/MainStore";
import axios from "axios";
import WeatherCard from "./WeatherCard";
import { DisplayContainer } from "./WeatherStyles";

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
        .then((res) => MainStore.setWeatherData(res.data.daily.data.slice(0, 5)));
    }
  }, [MainStore.locationSelected, MainStore.city]);

  console.log(MainStore.weatherData)
  console.log(MainStore.city)

  return (
    <DisplayContainer>
      {MainStore.weatherDataFilled && (
        MainStore.weatherData.map((data) => {
          return (
            <WeatherCard
              summary={data.summary}
              date={data.day}
              icon={data.icon}
            />
          )
        })
      )}
      {/*
        <WeatherCard 
        summary={"Sunny, more clouds in the evening. Temperature 11/24 °C."}
        date={"2022-08-16"}
      />
      */}
    </DisplayContainer>
  );
});

export default WeatherDisplay;