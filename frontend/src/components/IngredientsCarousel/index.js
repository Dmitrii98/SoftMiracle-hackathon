import React, {useRef, useState} from 'react';
import {
  Text,
  View,
  Dimensions,
  Image,
  Pressable,
} from 'react-native';
import { CheckBox } from 'react-native-elements';
import Carousel from 'react-native-anchor-carousel';
import styles from './styles';

const {width: windowWidth} = Dimensions.get('window');

const data = [
  {
    id: 'item2',
    image: 'https://www.magicwaters.ru/upload/dynamic/2019-04/17/36111.jpg',
    title: 'Овсяные хлопья',
    brandWt: 'Увелка 400г',
    wt:'20гр',
    price:'100р',
    vendor: 'Магнит'
  },
  {
    id: 'item3',
    image: 'https://calorizator.ru/sites/default/files/imagecache/product_512/product/strawberry-1.jpg',
    title: 'Клубника',
    brandWt: 'Тепличка 1кг',
    wt:'20гр',
    price:'100р',
    vendor: 'Пятерочка'
  },
  {
    id: 'item1',
    image: 'https://storage.delikateska.ru/cache/0/d/1581fd8a-e389-4980-9d5b-f2eb39d32a4f.jpg/w400h400.jpg',
    title: 'БрусникаБрусника',
    brandWt: 'Тепличка 1000кг',
    wt:'100гр',
    price:'1000р',
    vendor: 'Пятерочка'
  },
  {
    id: 'item6',
    image: 'https://vodovoz.ru/upload/iblock/e68/e6848d05fe81d3f52c0ef72170d30be2.jpeg',
    title: 'Яблоки',
    brandWt: 'Голден 400г',
    wt:'40гр',
    price:'100р',
    vendor: 'Магнит'
  },
  {
    id: 'item4',
    image: 'https://prostoest.ru/wp-content/uploads/2013/08/125429195-727x522.jpg',
    title: 'Груши',
    brandWt: 'Домашние 400г',
    wt:'20гр',
    price:'100р',
    vendor: 'Магнит'
  },

  {
    id: 'item5',
    image: 'https://vkustorg.com/image/cache/Ovochi_frukty/1460024087-1000x1000.jpg',
    title: 'Морковь',
    brandWt: 'Урожай 400г',
    wt:'20гр',
    price:'100р',
    vendor: 'Магнит'
  },
];


export default function IngredientsCarousel(props) {
    const {style} = props;
    const ITEM_WIDTH = 0.6 * windowWidth;
    const SEPARATOR_WIDTH = 16;
    const carouselRef = useRef(null);
    const [checkedState, setCheckedState] = useState(
      new Array(data.length).fill(false)
    );

    const checkBoxPressHandle = (position) => {
      const updatedCheckedState = checkedState.map((item, index) =>
        index === position ? !item : item
      );
      setCheckedState(updatedCheckedState);
    }
  
    function renderItem({item, index}) {
      const {image, title, brandWt, wt, price, vendor} = item;
      return (
        <Pressable
          activeOpacity={1}
          style={styles.item}
          onPress={() => {
            carouselRef.current.scrollToIndex(index);
          }}>
          <View style={styles.higherContainer}>
            <Text style={styles.itemWeight}>{wt}</Text>
            <CheckBox
              checkedColor="#8E67E4"
              uncheckedColor="#8E67E4"
              checked={checkedState[index]}
              onPress={() => checkBoxPressHandle(index)}
              containerStyle={styles.itemCheckBox}
              style={styles.itemCheckBox}
            />
          </View>
          <Image source={{uri: image}} style={styles.image} />
          <View style={styles.lowerContainer}>
            <View style={styles.lowerLeft}>
              <Text style={styles.titleText} numberOfLines={2}>
                {title}
              </Text>
              <Text style={styles.descriptionText} numberOfLines={1}>
                {brandWt}
              </Text>
              <View style={styles.itemFooter}>
                <Text style={[styles.vendor, vendor == 'Пятерочка' ? styles.vendorGreen : styles.vendorRed]}>{vendor}</Text>
                <Text style={styles.itemPrice}>{price}</Text>
              </View>
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
          data={data}
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