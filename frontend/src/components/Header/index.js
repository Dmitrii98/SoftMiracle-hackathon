import React from 'react';
import { Header } from 'react-native-elements';
import styles from './styles';

const HeaderMenu = () => {
  return (
    <Header
      leftComponent={{icon: 'menu', color: '#fff', iconStyle: {color: '#fff'}}}
      rightComponent={{icon: 'person', color: '#fff', iconStyle: {color: '#fff'}}}
    />
  );
};

export default HeaderMenu;
