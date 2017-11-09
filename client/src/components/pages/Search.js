import React, { Component } from "react";
import SearchResults from "../SearchResults"
import SearchForm from "../SearchForm"
import API from "../../utils/API"
import moment from 'moment';
import { Link } from "react-router-dom";
import Comment from "./Comment";

class Search extends Component {
	state={
		startDate: moment("1/1/2017"),
		endDate: moment(),
		searchTerm: "",
		searchResult: []
	};

	onStartChange = date => {
		this.setState({ startDate: date })
	};

	onEndChange = date => {
		this.setState({endDate: date})
	};

	onTermChange = event => {
		let searchInput = event.target.value;
    this.setState({searchTerm: searchInput});
	};

	handleFormSubmit = (event) => {
    event.preventDefault();
    let newQuery = "";
    if (this.state.searchTerm === ""){
    	newQuery = `?begin_date=${moment(this.state.startDate).format("YYYYMMDD")}&end_date=${moment(this.state.endDate).format("YYYYMMDD")}`;
    }else{
    	newQuery = `?q=${this.state.searchTerm}&begin_date=${moment(this.state.startDate).format("YYYYMMDD")}&end_date=${moment(this.state.endDate).format("YYYYMMDD")}`;
    }
    API.search(newQuery)
      .then(res => {
      	this.setState({searchResult: res.data.response.docs})})
      .catch(err => console.log(err));
  }

  handleSave = (event) => {
  	let index = event.target.id;
  	let rawArticle = this.state.searchResult[index];
  	let article = {
  		title: rawArticle.headline.main,
  		url: rawArticle.web_url,
  		date: moment(rawArticle.pub_date).format("MM-DD-YYYY hh:mm:ss")
  	};
  	API.saveArticle(article)
  		.then(res => <Comment />)
  		.catch(err => console.log(err));
  }

	render() {
		return(
		  <div>
		    <div className="jumbotron text-center">
		      <h1>NY Times Bulletin Board</h1>
		      <h2>Search Page</h2>
		      <p>Search for articles and hit Save to comment on them.  Or, go to the Comments page to see what other people have to say about their favorite articles.</p>
		    </div>
				<SearchForm 
					searchTerm={this.state.serchTerm}
					handleStartChange={this.onStartChange}
					handleEndChange={this.onEndChange}
					handleSearchChange={this.onTermChange}
					startDate={this.state.startDate}
					endDate={this.state.endDate}
					onSubmit={this.handleFormSubmit}
					/>
				<SearchResults 
				results={this.state.searchResult}
				onSave={this.handleSave}/>
			</div>);
  };

 }

 export default Search;