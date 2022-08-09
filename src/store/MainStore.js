import { makeAutoObservable } from "mobx";

class MainStore {
  location = {};
  city = "";
  locationData = "";
  weatherData = null;

  constructor() {
    makeAutoObservable(this);
  };

  setWeatherData(data) {
    this.weatherData = data;
  };

  get weatherDataFilled() {
    return this.weatherData;
  };

  get locationSelected() {
    return Object.keys(this.location).length !== 0;
  };

  setLocationData(location) {
    this.locationData = location;
  }

  setLocation(location) {
    this.location = location;
  };

  setCity(city) {
    this.city = city;
  };
};

export default new MainStore();