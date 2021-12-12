import React from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Product from '../../components/Product';
import styles from './styles';

const Basket = ({navigation}) => {

  const backHome = () => {
    navigation.goBack(null);
  };

  return (
    <ScrollView style={styles.scrollBox}>
      <View style={styles.buttonAndTitle}>
        <TouchableOpacity>
          <Ionicons
            onPress={backHome}
            name='arrow-back'
            size={30}
            color='#000'
            style={styles.backButton}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Корзина</Text>
      </View>
      <Product />
    </ScrollView>
  );
};

export default Basket;

