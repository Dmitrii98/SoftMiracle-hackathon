import React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';
import globalStyles from '../../styles/globalStyles'
import styles from './styles';

const StartScreen = ( ) => {

    return (
      <View style={globalStyles.container}>
          <Text>Hello Hackathon!</Text>
          <StatusBar style="auto" />
        <Button
          title="Solid Button"
        />
      </View>
    )
};

export default StartScreen;

