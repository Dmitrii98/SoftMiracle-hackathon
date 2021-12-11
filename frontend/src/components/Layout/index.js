import React from 'react';
import globalStyles from '../../styles/globalStyles';
import WelcomeModal from '../WelcomeModal';
import HeaderMenu from '../Header';
import Search from '../Search';
import { SafeAreaView } from 'react-native';
import styles from './styles';

const Layout = ({children}) => {
  return (
    <SafeAreaView style={globalStyles.container}>
      <WelcomeModal />
      <HeaderMenu />
      <Search />
      {children}
    </SafeAreaView>
  );
};

export default Layout;

