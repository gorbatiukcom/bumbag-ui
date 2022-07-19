import { createContext } from 'react';

var BumbagThemeContext = createContext({
  isSSR: false,
  setTheme: function setTheme() {},
  theme: {}
});

export { BumbagThemeContext };
