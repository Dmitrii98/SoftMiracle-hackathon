import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Preloader from '../components/Preloader';
import { HomeStack } from './stack';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'HomeStack') {
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
        <Tab.Screen name='HomeStack' component={HomeStack} options={{headerShown: false}} />
        <Tab.Screen name='Discount' component={Preloader} options={{headerShown: false}} />
        <Tab.Screen name='Basket' component={Preloader} options={{headerShown: false}} />
      </Tab.Navigator>
    </>
  );
};

export default MyTabs;
