import React, {useState} from 'react';
import {Button, Modal, Pressable, Text, View} from 'react-native';
import {Header} from '../components/Header';
import {styles} from '../styles/modalStyles';

export const ModalScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Header title="Modal" />

      <Button
        title="Abrir modal"
        onPress={() => {
          setModalVisible(true);
        }}
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
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};
