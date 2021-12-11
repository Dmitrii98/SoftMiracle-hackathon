import React from 'react';
import globalStyles from '../../styles/globalStyles';
import WelcomeModal from '../WelcomeModal';
import HeaderMenu from '../Header';
import Search from '../Search';
import { View } from 'react-native';
import styles from './styles';


const Layout = ({children}) => {
  return (
    <View style={globalStyles.container}>
      {/*<WelcomeModal />*/}
      <HeaderMenu />
      <Search />
      {children}
    </View>
  );
};

export default Layout;

