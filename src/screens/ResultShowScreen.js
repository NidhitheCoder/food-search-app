import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import zomato from "../api/zomato";
import NoImg from "../../assets/noImg.jpeg";

const ResultShowScreen = ({ navigation }) => {
  const [result, setResult] = useState();
  const id = navigation.getParam("item");

  const getRestaurant = async itemId => {
    const response = await zomato.get(`/restaurant?res_id=${itemId}`);
    setResult(response.data);
  };
  useEffect(() => {
    getRestaurant(id);
  }, []);
  return (
    <>
      {result ? (
        <View>
          <ScrollView>
            <Image
              style={styles.imageStyle}
              source={
                result.featured_image ? { uri: result.featured_image } : NoImg
              }
            />
            <Text style={styles.HeadingStyle}>{result.name}</Text>
            <View style={styles.textStyle}>
              <Text>
                {result.user_rating.aggregate_rating} Stars{" "}
                {result.user_rating.votes} Reviews
              </Text>
              <Text>{result.location.city}</Text>
              <Text>{result.timings}</Text>
              <Text>{result.phone_numbers}</Text>
            </View>
            <Text style={styles.HeadingStyle}>Hightlights are :</Text>
            <View style={styles.containerStyle}>
              {result.highlights.map((item, index) => (
                <Text key={index} style={styles.textStyle}>
                  * {item}
                </Text>
              ))}
            </View>
          </ScrollView>
        </View>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    paddingBottom: 10
  },
  imageStyle: {
    height: 150,
    width: 200,
    marginVertical: 20,
    alignSelf: "center",
    borderWidth: 5,
    borderColor: "yellow"
  },
  HeadingStyle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
    marginVertical: 10
  },
  textStyle: {
    marginHorizontal: 20,
    color: "green"
  }
});

export default ResultShowScreen;
