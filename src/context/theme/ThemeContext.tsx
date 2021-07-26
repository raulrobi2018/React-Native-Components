import React, {createContext} from 'react';
import {useReducer} from 'react';
import {lightTheme, themeReducer, ThemeState} from './themeReducer';

interface ThemeContextProps {
  theme: ThemeState;
  setDarkTheme: () => void;
  setLightTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({children}: any) => {
  const [theme, dispatch] = useReducer(themeReducer, lightTheme); // TODO: para establecer el estado inicial necesito leer el tema global del dispositivo
  const setDarkTheme = () => {
    dispatch({type: 'dark_theme'});
    console.log('Set dark  theme');
  };
  const setLightTheme = () => {
    dispatch({type: 'light_theme'});
    console.log('Set light theme');
  };

  // El value es lo que expone a cada uno de sus hijos
  return (
    <ThemeContext.Provider value={{theme, setDarkTheme, setLightTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};
