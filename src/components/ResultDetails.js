import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import noImg from "../../assets/noImg.jpeg";

const ResultDetail = ({ result }) => {
  return (
    <View style={styles.containerStyle}>
      <Image
        style={styles.imageStyle}
        source={
          result.featured_image
            ? {
                uri: result.featured_image
              }
            : noImg
        }
      />
      <Text style={styles.nameStyles}>{result.name}</Text>
      <Text>
        {result.user_rating.aggregate_rating} Stars, {result.user_rating.votes} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    marginHorizontal: 10
  },
  imageStyle: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5
  },
  nameStyles: {
    fontWeight: "bold"
  }
});

export default ResultDetail;
