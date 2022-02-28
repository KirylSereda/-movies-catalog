import axios from "axios";

export default axios.create({
  baseURL :'https://www.omdbapi.com/?i=tt3896198&apikey=8523cbb8',
  params: {
    s:'',
    page: null
}
});