import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

const RecipeCard = (props) => {
  const {navigation, name, time} = props;

  const openRecipe = () => {
    navigation.navigate('Recipe', {
      name: name,
      time: time
    });
  };

  return (
    <TouchableOpacity onPress={openRecipe} style={styles.card}>
      <View style={styles.textBox}>
        <Text style={styles.textName}>{name}</Text>
        <Text style={styles.textTime}>{time}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RecipeCard;

