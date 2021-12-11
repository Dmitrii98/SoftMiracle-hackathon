import React from 'react';
import { ScrollView, Text } from 'react-native';
import RecipeCard from '../../components/RecipeCard';
import Layout from '../../components/Layout';
import styles from './styles';
import ShopCarousel from '../../components/Carousel';

const Home = ({navigation}) => {
  const data = [
    {
      name: 'Овсяная каша',
      time: '40 мин',
      key: 1
    },
    {
      name: 'Пицца',
      time: '60 мин',
      key: 2
    },
    {
      name: 'Бургер',
      time: '15 мин',
      key: 3
    },
    {
      name: 'Макароны по-флотски',
      time: '40 мин',
      key: 4
    },
  ];

  return (
    <Layout>
      <ShopCarousel />
      <ScrollView style={styles.scrollBox}>
        <Text style={styles.title}>Популярные рецепты</Text>
        {
          data.map(card => (
            <RecipeCard
              key={card.key}
              name={card.name}
              time={card.time}
              navigation={navigation}
            />
          ))
        }
      </ScrollView>
    </Layout>
  );
};

export default Home;

