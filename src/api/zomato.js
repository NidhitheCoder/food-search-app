import axios from "axios";

export default axios.create({
  baseURL: "https://developers.zomato.com/api/v2.1/",
  headers: {
    "user-key": "3c1c5402a58ee41964087ba5f486cccf"
  }
});
