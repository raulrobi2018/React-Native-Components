import {Theme} from '@react-navigation/native';

type ThemeAction = {type: 'light_theme'} | {type: 'dark_theme'};

//Como el ThemeState extiende del Theme de react, se debe tener en cuenta
//que Theme ya tiene otros colores predefinidos, como primary, background, text, etc, etc
export interface ThemeState extends Theme {
  // El current theme solo puede ser light o dark
  currentTheme: 'light' | 'dark';
  dividerColor: string;
  buttonText: string;
  switchOn: string;
  switchOff: string;
}

//Aquí lightTheme será de tipo ThemeState
export const lightTheme: ThemeState = {
  currentTheme: 'light',
  dividerColor: 'rgba(0,0,0,0.7)',
  //   Se utilizará para el stack navigator
  dark: false,
  buttonText: '#DDFFBC',
  switchOn: '#999999',
  switchOff: '#d9d9d9',
  colors: {
    primary: '#52734D',
    background: '#FEFFDE',
    card: '#FEFFDE',
    text: '#52734D',
    border: '#91C788',
    notification: 'yellow',
  },
};

//Aquí darkTheme será de tipo ThemeState
export const darkTheme: ThemeState = {
  currentTheme: 'dark',
  dividerColor: '#3E432E',
  //   Se utilizará para el stack navigator
  dark: true,
  buttonText: '#3E432E',
  switchOn: '#999999',
  switchOff: '#d9d9d9',
  colors: {
    primary: '#A7D129',
    background: '#000000',
    card: 'gray',
    text: '#A7D129',
    border: '#A7D129',
    notification: 'yellow',
  },
};

export const themeReducer = (
  state: ThemeState,
  action: ThemeAction,
): ThemeState => {
  switch (action.type) {
    // Un reducer no debería tener interacción con el mundo exterior. Por eso, lightTheme y darkTheme se
    //debería devolver aquí adentro y no definirlo afuera. Se hace así para que se entienda mejor
    //Lo otro es enviarlo en el payload del action
    case 'light_theme':
      return {...lightTheme};
    case 'dark_theme':
      return {...darkTheme};
    default:
      return state;
  }
};
