import { makeAutoObservable } from "mobx";

class MainStore {
  location = {};
  city = "";

  constructor() {
    makeAutoObservable(this);
  };

  get locationSelected() {
    return Object.keys(this.location).length !== 0;
  };

  setLocation(location) {
    this.location = location;
  };

  setCity(city) {
    this.city = city;
  };
};

export default new MainStore();