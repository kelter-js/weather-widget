import { makeAutoObservable } from "mobx";

class MainStore {
  location = {};
  city = "";
  locationData = "";

  constructor() {
    makeAutoObservable(this);
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