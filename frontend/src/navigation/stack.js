import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RecipeScreen from '../screens/Recipe';
import Home from '../screens/Home';
import Category from '../screens/Category';

const Stack = createNativeStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Home'
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name='Recipe'
        component={RecipeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name='Category'
        component={Category}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

