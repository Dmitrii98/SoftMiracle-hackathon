import React, { useRef } from 'react';
import {
  Dimensions,
  Pressable,
  View,
  Text,
  Image,
} from 'react-native';
import Carousel from 'react-native-anchor-carousel';
import styles from './styles';

const {width: windowWidth} = Dimensions.get('window');

const data = [
  {
    id: 'item2',
    image: 'https://i.imgur.com/N3nQ9CS.jpg',
    title: 'Завтрак',
    url: 'https://github.com/lehoangnam97/react-native-anchor-carousel',
  },
  {
    id: 'item3',
    image: 'https://i.imgur.com/AzdYlDM.jpg',
    title: 'Обед',
    url: 'https://www.npmjs.com/package/react-native-anchor-carousel',
  },
  {
    id: 'item1',
    image: 'https://i.imgur.com/s7GgEa8.jpg',
    title: 'Ужин',
    url: 'https://www.npmjs.com/package/react-native-anchor-carousel',
  },
  {
    id: 'item6',
    image: 'https://i.imgur.com/1O1Kd6T.jpg',
    title: 'Супы',
    url: 'https://github.com/lehoangnam97/react-native-anchor-carousel',
  },
  {
    id: 'item4',
    image: 'https://i.imgur.com/eNuhvpN.jpg',
    title: 'Второе',
    url: 'https://github.com/lehoangnam97/react-native-anchor-carousel',
  },
];

export default function ShopCarousel(props) {
  const {style, categories, navigation} = props;
  const carouselRef = useRef(null);
  const ITEM_WIDTH = 0.4 * windowWidth;
  const SEPARATOR_WIDTH = 5;

  const openCategory = (id, title) => {
    navigation.navigate('Category', {id, title});
  };

  const renderHeader = () => {
    return (
      <View style={styles.header}>
        <View>
          <Text style={styles.name}>Категории</Text>
        </View>
      </View>
    );
  };

  const renderItem = ({item, index}) => {
    const {category_id, title, picture} = item;
    return (
      <Pressable
        activeOpacity={1}
        style={styles.item}
        onPress={() => openCategory(category_id, title)}
      >
        <View style={styles.imageContainer}>
          <Image
            source={{uri: picture}}
            style={styles.image}
          />
          <Text style={styles.titleText}>
            {title}
          </Text>
        </View>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      {renderHeader()}
      <Carousel
        keyExtractor={item => item?.id}
        style={[styles.carousel, style]}
        ref={carouselRef}
        data={categories}
        renderItem={renderItem}
        itemWidth={ITEM_WIDTH}
        separatorWidth={SEPARATOR_WIDTH}
        inActiveScale={1}
        inActiveOpacity={1}
        containerWidth={windowWidth}
        minScrollDistance={12}
      />
    </View>
  );
}
