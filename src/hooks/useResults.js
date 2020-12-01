import { useEffect, useState } from "react";
import zomato from "../api/zomato";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  const SearchApi = async searchTerm => {
    try {
      const response = await zomato.get("/search", {
        params: {
          q: searchTerm
        }
      });
      setResults(Object.values(response.data.restaurants));
      setErrorMsg("");
    } catch {
      setErrorMsg("Something went wrong");
    }
  };

  // SearchApi('rice'); // this is bad code and it couses infinit loop
  useEffect(() => {
    SearchApi("rice");
  }, []);

  return [SearchApi, results, errorMsg];
};
