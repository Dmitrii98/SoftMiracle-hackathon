import React, { useEffect, useState } from 'react';
import { ScrollView, Text } from 'react-native';
import RecipeCard from '../../components/RecipeCard';
import Layout from '../../components/Layout';
import ShopCarousel from '../../components/Carousel';
import { goodsAPI } from '../../api/goodsAPI';
import styles from './styles';

const Home = ({navigation}) => {
  const [categories, setCategories] = useState([]);
  const [recipes, setRecipes] = useState([]);

  useEffect(async () => {
    try {
      const categories = await goodsAPI.getCategories();
      setCategories(categories);
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(async () => {
    try {
      const recipes = await goodsAPI.getRecipes();
      setRecipes(recipes);
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <Layout>
      <ScrollView style={styles.scrollBox}>
        <ShopCarousel categories={categories} navigation={navigation} />
        <Text style={styles.title}>Популярные рецепты</Text>
        {
          recipes.map((recipe,index) => (
            <RecipeCard
              key={`key${index}`}
              recipe={recipe}
              navigation={navigation}
            />
          ))
        }
      </ScrollView>
    </Layout>
  );
};

export default Home;

