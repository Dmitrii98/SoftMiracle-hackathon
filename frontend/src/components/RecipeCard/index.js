import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';


const RecipeCard = ({name}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

export default RecipeCard;

