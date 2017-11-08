import axios from "axios";
import keys from "./keys";
const BASEURL = "http://api.nytimes.com";
let queryBase = `/svc/search/v2/articlesearch.json?&sort=newest&api-key=${keys.apiKey}`;

export default {
  search: function(query) {
    return axios.get(BASEURL + queryBase + query);
  }
};