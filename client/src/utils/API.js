import axios from "axios";
import keys from "./keys";
const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
let queryBase = `&api-key=${keys.apiKey}`

export default {
  search: function(query) {
    return axios.get(BASEURL + query + queryBase);
  },
  saveArticle: function(article) {
    return axios.post("/api/articles", article);
  },
  searchArticle: function(){
    return axios.get("/api/articles");  	
  },
  saveComment: function(comment) {
  	return axios.post("/api/comments", comment);
  }
};