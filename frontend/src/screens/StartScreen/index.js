import React, { useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import globalStyles from '../../styles/globalStyles';
import WelcomeModal from '../../components/WelcomeModal';
import HeaderMenu from '../../components/Header';
import Search from '../../components/Search';
import TabMenu from '../../components/TabMenu';
import styles from './styles';

const StartScreen = () => {
  return (
    <SafeAreaView style={globalStyles.container}>
      <WelcomeModal />
      <HeaderMenu />
      <Search />
      <TabMenu />
    </SafeAreaView>
  );
};

export default StartScreen;

