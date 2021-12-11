import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

const RecipeCard = ({navigation, recipe}) => {
  console.log(recipe.picture);

  const openRecipe = () => {
    navigation.navigate('Recipe', {recipe: recipe});
  };

  return (
    <TouchableOpacity onPress={openRecipe} style={styles.card}>
      <Image
        source={{uri: recipe.picture}}
        style={styles.image}
      />
      <View style={styles.textBox}>
        <Text style={styles.textName}>{recipe.title}</Text>
        <View style={styles.iconAndText}>
          <Ionicons
            name='time'
            size={20}
            color='#fff'
            style={styles.timeIcon}
          />
          <Text style={styles.timeText}>{recipe.time}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RecipeCard;

