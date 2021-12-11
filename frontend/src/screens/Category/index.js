import React, { useEffect, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import RecipeCard from '../../components/RecipeCard';
import Layout from '../../components/Layout';
import { goodsAPI } from '../../api/goodsAPI';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Category = ({navigation, route}) => {
  const id = route.params.id;
  const title = route.params.title;
  const [recipes, setRecipes] = useState([]);

  useEffect(async () => {
    try {
      const recipes = await goodsAPI.getCategory(id);
      setRecipes(recipes);
    } catch (e) {
      console.log(e);
    }
  }, []);

  const backHome = () => {
    navigation.navigate('Home');
  };

  return (
    <Layout>
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
          <Text style={styles.title}>{title}</Text>
        </View>
        {
          recipes.map((recipe, index) => (
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

export default Category;

