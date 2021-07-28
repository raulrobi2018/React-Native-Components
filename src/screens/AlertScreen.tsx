import React from 'react';
import { useContext } from 'react';
import {Alert, Button, View} from 'react-native';
import prompt from 'react-native-prompt-android';
import {Header} from '../components/Header';
import { ThemeContext } from '../context/theme/ThemeContext';
import {styles} from '../styles/alertStyles';

export const AlertScreen = () => {

const {theme} = useContext(ThemeContext)

  const createTwoButtonAlert = () =>
    Alert.alert('Alert con 2 botones', 'Texto del alerta', [
      {
        text: 'Cancelar',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'Aceptar', onPress: () => console.log('OK Pressed')},
    ]);

  const createThreeButtonAlert = () =>
    Alert.alert('Alert con 3 botones', 'Este es el texto', [
      {
        text: 'Preguntame después',
        onPress: () => console.log('Ask me later pressed'),
      },
      {
        text: 'Cancelar',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'Aceptar', onPress: () => console.log('OK Pressed')},
    ]);

  const createCancelableAlert = () =>
    Alert.alert(
      'Alert cancelable',
      'Cancelable tocando fuera',
      [
        {
          text: 'Cancelar',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'Aceptar', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: true, onDismiss: () => console.log('On dismiss')},
    );

  const createPrompt = () =>
    Alert.prompt(
      'Prompt',
      'Solamente funciona para IOS',
      (valor: string) => console.log('Valor ', valor),
      //   tipo de datos a ingresar
      'plain-text',
      //   Valor por defecto
      'Valor por defecto',
      //Tipo de teclado a abrir
      'number-pad',
    );

  const createPromptForAndroid = () => {
    return prompt(
      'Ingrese contraseña',
      'Ingrese la contraseña para verificar',
      [
        {
          text: 'Cancelar',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Aceptar',
          onPress: password => console.log('OK Pressed, password: ' + password),
        },
      ],
      {
        type: 'secure-text',
        cancelable: false,
        defaultValue: 'test',
        placeholder: 'placeholder',
      },
    );
  };

  return (
    <View style={styles.container}>
      <Header title="Alerts" />
      <View style={styles.row}>
        <Button title={'Alerta con 2 botones'} onPress={createTwoButtonAlert} color={theme.colors.primary}/>
      </View>
      <View style={styles.row}>
        <Button
          title={'Alerta con 3 botones'}
          onPress={createThreeButtonAlert}
          color={theme.colors.primary}
        />
      </View>
      <View style={styles.row}>
        <Button title={'Alerta cancelable'} onPress={createCancelableAlert} color={theme.colors.primary} />
      </View>
      <View style={styles.row}>
        <Button title={'Prompt (solo IOS)'} onPress={createPrompt} color={theme.colors.primary}/>
      </View>
      <View style={styles.row}>
        <Button title={'Prompt for Android'} onPress={createPromptForAndroid} color={theme.colors.primary}/>
      </View>
    </View>
  );
};
