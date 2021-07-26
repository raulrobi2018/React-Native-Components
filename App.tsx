import 'react-native-gesture-handler';
import React from 'react';
import {DefaultTheme, DarkTheme, Theme} from '@react-navigation/native';
import {Navigator} from './src/navigation/Navigator';
import {ThemeProvider} from './src/context/theme/ThemeContext';

// const customTheme: Theme = {
//   dark: true,
//   colors: {
//     // ...DarkTheme.colors,
//     ...DefaultTheme.colors,
//     // primary: string;
//     // background: string;
//     // card: string;
//     // text: string;
//     // border: string;
//     // notification: string;
//   },
// };

const App = () => {
  return (
    <AppState>
      <Navigator />
    </AppState>
  );
};

const AppState = ({children}: any) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default App;
