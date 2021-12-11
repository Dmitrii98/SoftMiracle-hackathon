import React from 'react';
import { ScrollView } from 'react-native';
import RecipeCard from '../../components/RecipeCard';
import Layout from '../../components/Layout';
import styles from './styles';

const Home = () => {
  const data = [
    {name: 'Название рецепта', key: 1},
    {name: 'Название рецепта', key: 2},
    {name: 'Название рецепта', key: 3},
    {name: 'Название рецепта', key: 4},
  ];

  return (
    <Layout>
      <ScrollView>
        {
          data.map(card => (
            <RecipeCard key={card.key} name={card.name} />
          ))
        }
      </ScrollView>
    </Layout>
  );
};

export default Home;

