import React from 'react';
import { Header } from 'react-native-elements';
import styles from './styles';

const HeaderMenu = () => {
  return (
    <Header
      containerStyle={{
        backgroundColor: '#fff',
      }}
      leftComponent={{icon: 'menu', color: '#000', iconStyle: {color: '#000'}}}
      rightComponent={{icon: 'person', color: '#000', iconStyle: {color: '#000'}}}
    />
  );
};

export default HeaderMenu;
