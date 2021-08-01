import React, {useState} from 'react';
import {useContext} from 'react';
import {Button, Modal, Pressable, Text, View} from 'react-native';
import {Header} from '../components/Header';
import {ThemeContext} from '../context/theme/ThemeContext';
import {styles} from '../styles/modalStyles';

export const ModalScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const {theme} = useContext(ThemeContext);

  return (
    <View style={styles.container}>
      <Header title="Modal" />

      <Button
        title="Abrir modal"
        onPress={() => {
          setModalVisible(true);
        }}
        color={theme.colors.primary}
      />

      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        {/* Background */}
        <View style={styles.background}>
          {/* Contenido del modal */}
          <View style={styles.modal}>
            <Header title="Título" />
            <Text>Cuerpo del modal</Text>
            <Button
              title="Cerrar"
              onPress={() => {
                setModalVisible(false);
              }}
              color={theme.colors.primary}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};
