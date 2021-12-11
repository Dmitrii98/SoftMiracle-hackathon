import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartScreen from '../screens/StartScreen';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Welcome'
        component={StartScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default MyStack;
