import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultList from "../components/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [SearchApi, results, errorMsg] = useResults();

  const filterResultByPrice = priceRange => {
    return results.filter(
      result => result.restaurant.price_range === priceRange
    );
  };

  return (
    <View style={{flex:1}}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => SearchApi(term)}
      />
      {errorMsg ? (
        <Text>{errorMsg}</Text>
      ) : (
        <Text style={styles.textStyle}>We have found {results.length} results. </Text>
      )}

      <ScrollView>
        <ResultList results={filterResultByPrice(1)} title="Cost Effective" />
        <ResultList results={filterResultByPrice(2)} title="Bit Pricier" />
        <ResultList results={filterResultByPrice(3)} title="Big Spenter" />
        <ResultList results={filterResultByPrice(4)} title="Too much costly" />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle:{
    margin:15,
    color:'green'
  }
});

export default SearchScreen;
