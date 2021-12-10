import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import styles from './styles';

const Preloader = () => {
  return (
    <View style={styles.preloader}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

export default Preloader;
