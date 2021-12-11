import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Preloader from '../components/Preloader';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MyStack = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home';
            } else if (route.name === 'Discount') {
              iconName = focused
                ? 'pricetags'
                : 'pricetags';
            } else if (route.name === 'Basket') {
              iconName = focused
                ? 'basket'
                : 'basket';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name='Home' component={Home} options={{headerShown: false}} />
        <Tab.Screen name='Discount' component={Preloader} options={{headerShown: false}} />
        <Tab.Screen name='Basket' component={Preloader} options={{headerShown: false}} />
      </Tab.Navigator>
      {/*<Stack.Navigator>*/}
      {/*  <Stack.Screen*/}
      {/*    name='Welcome'*/}
      {/*    component={Home}*/}
      {/*    options={{headerShown: false}}*/}
      {/*  />*/}
      {/*</Stack.Navigator>*/}
    </>
  );
};

export default MyStack;
