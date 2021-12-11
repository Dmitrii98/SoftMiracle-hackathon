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

            if (route.name === 'Главная') {
              iconName = focused
                ? 'home'
                : 'home';
            } else if (route.name === 'Скидки на рецепты') {
              iconName = focused
                ? 'pricetags'
                : 'pricetags';
            } else if (route.name === 'Корзина') {
              iconName = focused
                ? 'basket'
                : 'basket';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#F2994A',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            paddingBottom: 5,
            paddingTop: 5,
          }
        })}
      >
        <Tab.Screen name='Главная' component={HomeStack} options={{headerShown: false}} />
        <Tab.Screen name='Скидки на рецепты' component={Preloader} options={{headerShown: false}} />
        <Tab.Screen name='Корзина' component={Preloader} options={{headerShown: false}} />
      </Tab.Navigator>
    </>
  );
};

export default MyTabs;
