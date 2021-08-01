import React, {useState} from 'react';
import {
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from 'react-native';
import {
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import {Header} from '../components/Header';
import {styles as textInputStyles} from '../styles/textInputStyles';
import {useForm} from '../hooks/useForm';
import {CustomSwitch} from '../components/CustomSwitch';
import {useContext} from 'react';
import {ThemeContext} from '../context/theme/ThemeContext';

export const TextInputScreen = () => {
  const {form, onChange, isSubscribed} = useForm({
    name: '',
    email: '',
    phone: '',
    isSubscribed: false,
  });

  const {theme} = useContext(ThemeContext);

  const styles = textInputStyles(theme);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        {/* Este componente es para que se pueda hacer click afuera y cerrar el teclado */}
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <Header title="Text inputs" />
            <View style={styles.row}>
              <TextInput
                style={styles.input}
                //onChangeText={onChangeNumber}
                placeholder="Nombre"
                keyboardType="default"
                autoCorrect={false}
                autoCapitalize="words"
                onChangeText={value => onChange(value, 'name')}
                keyboardAppearance="dark"
              />
            </View>
            <View>
              <Text style={styles.text}>{JSON.stringify(form, null, 3)}</Text>
            </View>
            <View>
              <Text style={styles.text}>{JSON.stringify(form, null, 3)}</Text>
            </View>
            <View style={styles.row}>
              <TextInput
                style={styles.input}
                //onChangeText={onChangeNumber}
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={value => onChange(value, 'email')}
              />
            </View>
            <View style={styles.row}>
              <TextInput
                style={styles.input}
                //onChangeText={onChangeNumber}
                placeholder="Teléfono"
                keyboardType="number-pad"
                onChangeText={value => onChange(value, 'phone')}
              />
            </View>

            <View style={styles.row}>
              <Text>Suscribirme</Text>
              <CustomSwitch
                isOn={isSubscribed}
                onChange={value => onChange(value, 'isSubscribed')}
              />
            </View>
            <View>
              <Text>{JSON.stringify(form, null, 3)}</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
