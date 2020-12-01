import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultList from "../components/ResultsList";

const SearchScreen = ({navigation}) => {
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
        <Text>We have found {results.length} results </Text>
      )}

      <ScrollView>
        <ResultList results={filterResultByPrice(1)} navigation={navigation} title="Cost Effective" />
        <ResultList results={filterResultByPrice(2)} navigation={navigation} title="Bit Pricier" />
        <ResultList results={filterResultByPrice(3)} navigation={navigation} title="Big Spenter" />
        <ResultList results={filterResultByPrice(4)} navigation={navigation} title="Too much costly" />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
