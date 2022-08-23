import { makeAutoObservable } from "mobx";

export const getMode = localStorage.getItem('darkMode');

class ThemeModeStore {
  mode = !!getMode ? 'dark' : 'light'

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