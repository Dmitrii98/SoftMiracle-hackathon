import React from 'react';
import {
  Image,
  ScrollView, Text,
  TouchableOpacity,
  View
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const ProductInfo = ({navigation, route}) => {
  const product = route.params.item;

  const backHome = () => {
    navigation.goBack(null);
  };

  return (
    <ScrollView style={styles.scrollBox}>
      <View style={styles.backButtonBox}>
        <TouchableOpacity>
          <Ionicons
            onPress={backHome}
            name='arrow-back'
            size={30}
            color='#000'
            style={styles.backButton}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <View style={styles.containerFlex}>
          <Image source={{uri: product.picture}} style={styles.image}></Image>
          <Text style={styles.title}>{product.product_name}</Text>
          <Text style={styles.subtitle}>{product.vendor}</Text>
        </View>
      </View>
      <View style={styles.accordionContainer}>
        <View style={styles.accordionTitle}>
          <Text style={styles.accordionPar}>Описание товара</Text>
          <Ionicons
            name='arrow-down'
            size={20}
            color='#000000'
          />
        </View>
        <View style={styles.accordionTitle}>
          <Text style={styles.accordionPar}>Выбрать в другом магазине</Text>
          <Ionicons
            name='arrow-down'
            size={20}
            color='#000000'
          />
        </View>
        <View style={styles.accordionTitle}>
          <Text style={styles.accordionPar}>Похожие товары</Text>
          <Ionicons
            name='arrow-down'
            size={20}
            color='#000000'
          />
        </View>
      </View>

    </ScrollView>
  );
};

export default ProductInfo;

