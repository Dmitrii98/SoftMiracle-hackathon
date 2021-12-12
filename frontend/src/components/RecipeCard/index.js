import React from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const RecipeCard = ({navigation, recipe}) => {

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
          <Text style={styles.timeText}>{recipe.time} минут</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RecipeCard;

