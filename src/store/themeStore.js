import { makeAutoObservable } from "mobx";

class ThemeModeStore {
  mode = 'dark';

  constructor() {
    makeAutoObservable(this);
  };

  setMode(value) {
    if (value) {
      this.mode = 'dark'
      localStorage.setItem('darkMode', 'true')
    } else {
      this.mode = 'light'
      localStorage.removeItem('darkMode')
    };
  };
};

export default new ThemeModeStore();