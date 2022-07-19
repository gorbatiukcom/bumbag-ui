import { useContext } from 'react';
import { BumbagThemeContext } from '../Provider/ThemeContext.js';
import 'classnames';
import '@emotion/css';
import { ThemeContext } from '@emotion/react';
import '@emotion/styled';

function useTheme() {
  var _React$useContext = useContext(BumbagThemeContext),
      isSSR = _React$useContext.isSSR,
      setTheme = _React$useContext.setTheme;

  var theme = useContext(ThemeContext);
  return {
    isSSR: isSSR,
    theme: theme,
    setTheme: setTheme
  };
}

export { useTheme };
