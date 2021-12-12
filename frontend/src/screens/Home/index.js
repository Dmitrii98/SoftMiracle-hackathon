import React, { useCallback, useEffect, useState } from 'react';
import { ScrollView, Text } from 'react-native';
import RecipeCard from '../../components/RecipeCard';
import Layout from '../../components/Layout';
import ShopCarousel from '../../components/Carousel';
import IngredientsCarousel from '../../components/IngredientsCarousel/index';
import styles from './styles';
import { goodsAPI } from '../../api/goodsAPI';

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
        <ShopCarousel categories={categories} />
        <IngredientsCarousel />
        <Text style={styles.title}>Популярные рецепты</Text>
        {
          recipes.map((recipe,index) => (
            <RecipeCard
              key={`key${index}`}
              recipe={recipe}
              title={recipe.title}
              text={recipe.text}
              time={recipe.time}
              products={recipe.products}
              picture={recipe.picture}
              navigation={navigation}
            />
          ))
        }
      </ScrollView>
    </Layout>
  );
};

export default Home;

