import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const ResultDetail = ({ result }) => {
  return (
    <View style={styles.containerStyle}>
      <Image
        style={styles.imageStyle}
        source={{
          uri: result.featured_image
            ? result.featured_image
            : "https://b.zmtcdn.com/data/pictures/6/60426/dc8635774c82fff19df05ac57e07f21f.jpg?output-format=webp"
        }}
      />
      <Text style={styles.nameStyles}>{result.name}</Text>
      <Text>{result.user_rating.aggregate_rating} Stars, {result.user_rating.votes} Reviews</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle:{
    marginLeft:15
  },
  imageStyle: {
    width: 250,
    height:120,
    borderRadius: 4,
    marginBottom:5
  },
  nameStyles:{
      fontWeight:'bold',
  }
});

export default ResultDetail;
