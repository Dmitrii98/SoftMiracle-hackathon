import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Button } from 'react-native-elements';
import styles from './styles';

const RecipeScreen = ({route, navigation}) => {
  const recipe = route.params.recipe;
  console.log(recipe);
  const backHome = () => {
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.recipe}>
        <TouchableOpacity>
            <Ionicons
              onPress={backHome}
              name='arrow-back'
              size={30}
              color='#000'
              style={styles.backButton}
            />
        </TouchableOpacity>
        <Image
          style={styles.productImage}
          source={{uri: recipe.picture}}
        />
        <View style={styles.productDescription}>
          <View style={styles.titleAndTime}>
            <Text style={styles.title}>{recipe.title}</Text>
            <View style={styles.iconAndText}>
              <Ionicons
                name='time'
                size={20}
                color='#A7A7A7'
                style={styles.timeIcon}
              />
              <Text style={styles.timeText}>{recipe.time}</Text>
            </View>
          </View>
          <Text style={styles.text}>
            Классическая овсяная каша легко превращается в сытный десерт: нужно просто добавить
            свежей клубники
          </Text>
        </View>
        <View style={styles.titleAndButton}>
          <Text>Ингредиенты</Text>
          <Button
            title='Добавить в корзину'
            containerStyle={{
              height: 40,
              width: 200,
              marginHorizontal: 30,
            }}
            buttonStyle={{backgroundColor: '#F2994A'}}
          />
        </View>

        {/*

        ТОЛЯ ТВОЙ КОД БУДЕТ ТУТ

      */}

      </ScrollView>
    </SafeAreaView>
  );
};

export default RecipeScreen;

