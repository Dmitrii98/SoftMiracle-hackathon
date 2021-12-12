import React from 'react';
import { Header } from 'react-native-elements';
import styles from './styles';
import { Text, View } from 'react-native';

const Step = ({stepText, index}) => {

  return (
    <View style={styles.step}>
      <View style={styles.inner}>
        <Text style={styles.title}>Шаг {index +1}</Text>
        <Text style={styles.text}>{stepText}</Text>
      </View>
    </View>
  );
};

export default Step;
