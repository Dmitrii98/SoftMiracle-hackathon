import React, { useState } from 'react';
import { Overlay, Text, Button } from 'react-native-elements';
import styles from './styles';

const WelcomeModal = () => {
  const [visible, setVisible] = useState(true);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
      <Overlay
        isVisible={visible}
        style={styles.modal}
      >
        <Text h1 style={styles.text}>
          Добро пожаловать в Мир Рецептов
        </Text>
        <Text h3 style={styles.text}>
          Выбирай рецепт и покупай все товары для них в одном приложении!
        </Text>
        <Button onPress={toggleOverlay} title="Поехали! :)" />
      </Overlay>
  );
};

export default WelcomeModal;

