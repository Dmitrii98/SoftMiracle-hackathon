import React, { useRef, useState } from 'react';
import {
  Text,
  View,
  Dimensions,
  Image,
  Pressable, TouchableOpacity,
} from 'react-native';
import { Button, CheckBox } from 'react-native-elements';
import Carousel from 'react-native-anchor-carousel';
import styles from './styles';

const {width: windowWidth} = Dimensions.get('window');

export default function IngredientsCarousel(props) {
  const {
    style,
    products,
    navigation
  } = props;
  const ITEM_WIDTH = 0.6 * windowWidth;
  const SEPARATOR_WIDTH = 16;
  const carouselRef = useRef(null);
  const [checkedState, setCheckedState] = useState(
    new Array(products.length).fill(true)
  );

  const checkBoxPressHandle = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
  };

  const openProductInfo = (item) => {
    navigation.navigate('ProductInfo', {item});
  };

  function renderItem({item, index}) {
    const {count, merchant_name, picture, product_cost, product_name, weight, vendor} = item;
    return (
      <Pressable
        activeOpacity={1}
        style={styles.item}
        onPress={() => {
          carouselRef.current.scrollToIndex(index);
        }}>
        <View style={styles.higherContainer}>
          <Text style={styles.itemWeight}>{weight}гр</Text>
          <CheckBox
            checkedColor='#8E67E4'
            uncheckedColor='#8E67E4'
            checked={checkedState[index]}
            onPress={() => checkBoxPressHandle(index)}
            containerStyle={styles.itemCheckBox}
            style={styles.itemCheckBox}
          />
        </View>
        <TouchableOpacity>
          <Image source={{uri: picture}} style={styles.image} />
        </TouchableOpacity>
        <View style={styles.lowerContainer}>
          <View style={styles.lowerLeft}>
            <Text style={styles.titleText} numberOfLines={2}>
              {product_name}
            </Text>
            <Text style={styles.descriptionText} numberOfLines={1}>
              {vendor}
            </Text>
            <View style={styles.itemFooter}>
              <Text
                style={[styles.vendor,
                  merchant_name == 'Пятерочка'
                    ? styles.vendorGreen
                    : styles.vendorRed]}
              >{merchant_name}</Text>
              <Text style={styles.itemPrice}>{product_cost}р</Text>
            </View>
            <Button
              title='Изменить'
              containerStyle={{
                height: 40,
                width: 170,
              }}
              onPress={() => openProductInfo(item)}
              buttonStyle={{backgroundColor: '#000'}}
            />
          </View>
        </View>
      </Pressable>
    );
  }

  return (
    <View style={styles.container}>
      <Carousel
        keyExtractor={item => item?.id}
        style={[styles.carousel, style]}
        ref={carouselRef}
        data={products}
        renderItem={renderItem}
        itemWidth={ITEM_WIDTH}
        separatorWidth={SEPARATOR_WIDTH}
        inActiveScale={1}
        inActiveOpacity={1}
        containerWidth={windowWidth}
      />
    </View>
  );
}
