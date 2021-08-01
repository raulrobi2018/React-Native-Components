import React, {createContext} from 'react';
import {useEffect} from 'react';
import {useReducer} from 'react';
import {Appearance} from 'react-native';
import {AppState, useColorScheme} from 'react-native';
import {darkTheme, lightTheme, themeReducer, ThemeState} from './themeReducer';

interface ThemeContextProps {
  theme: ThemeState;
  setDarkTheme: () => void;
  setLightTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({children}: any) => {
  //Hook de React que devuelve el color del sistema
  const colorScheme = useColorScheme();

  const [theme, dispatch] = useReducer(
    themeReducer,
    colorScheme === 'dark' ? darkTheme : lightTheme,
  );

  //Si cambia el tema del dispositivo, también cambiamos en la aplicación
  //De esta forma funciona en ambos dispositivos
  useEffect(() => {
    AppState.addEventListener('change', status => {
      if (status === 'active') {
        Appearance.getColorScheme() === 'light'
          ? setLightTheme()
          : setDarkTheme();
      }
    });
  }, []);

  //Si cambia el tema del dispositivo, también cambiamos en la aplicación
  //Esta solución por ahora solo funciona en IOS
  // useEffect(() => {
  //   colorScheme === 'light' ? setLightTheme() : setDarkTheme();
  // }, [colorScheme]);

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
