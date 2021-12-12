import React, { useState } from 'react';
import { Image, Text, TextInput, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Button } from 'react-native-elements';
import styles from './styles';
import NumericInput from 'react-native-numeric-input';

const Product = () => {
  const [selectedValue, setSelectedValue] = useState('Доставка');

  return (
    <View>
      <View style={styles.productInfo}>
        <View
          style={styles.line}
        />
        <View style={styles.product}>
          <Image style={styles.productImage} source={require('../../assets/example.png')} />
          <View style={styles.titleAndPrice}>
            <Text style={styles.productTitle}>Овсянка увелка 100 гр</Text>
            <Text style={styles.price}>100₽</Text>
          </View>
          <NumericInput
            type='up-down'
            style={styles.count}
            totalWidth={55}
            totalHeight={50}
            iconSize={25}
            minValue={0}
            onChange={value => console.log(value)}
          />
        </View>
        <View
          style={styles.line}
        />
      </View>
      <Text style={styles.howToBuy}>Выберите способ получения</Text>
      <Picker
        selectedValue={selectedValue}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label='Доставка' value='Доставка' />
        <Picker.Item label='Самовывоз' value='Самовывоз' />
      </Picker>
      <View style={styles.sumAndPrice}>
        <Text style={styles.sum}>Итого к оплате</Text>
        <Text style={styles.sumPrice}>100₽</Text>
      </View>
      <Button
        title='Оформить заказ'
        containerStyle={{
          width: '90%',
          marginHorizontal: 20
        }}
        buttonStyle={{backgroundColor: 'black'}}
      />
    </View>
  );
};

export default Product;
