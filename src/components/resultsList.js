import React from "react";
import { View, Text, StyleSheet,FlatList } from "react-native";

const ResultList = ({ title,results }) => {
  return (
    <View>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={results}
      keyExtractor={(result)=>result.restaurant.id}
      renderItem={({item})=>{
        return <Text>{item.restaurant.name}</Text>
      }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    titleStyle:{
        fontSize:18,
        fontWeight:'bold'
      }
});

export default ResultList;
