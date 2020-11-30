import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [errorMsg, setErrMsg] = useState("");

  const SearchApi = async searchTerm => {
    try {
      const response = await yelp.get("/search", {
        params: {
          q: searchTerm
        }
      });
      setResults(Object.values(response.data.restaurants));
      setErrMsg("");
    } catch (err) {
      setErrMsg("Something went wrong");
    }
  };

  // SearchApi('rice'); // this is bad code and it couses infinit loop
  useEffect(() => {
    SearchApi("rice");
  }, []);

  return (
    <View>
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
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
