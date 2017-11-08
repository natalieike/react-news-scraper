import React, { Component } from "react";
import SearchResults from "../SearchResults"
import SearchForm from "../SearchForm"
import API from "../../utils/API"

class Search extends Component {
	state={
		date:"Sun Nov 26 2017 00:00:00 GMT-0800"
	};

	onChange = date => {
		console.log(date);
		this.setState({ date })
	};

	render() {
		return(
		  <div>
		    <div className="jumbotron text-center">
		      <h1>NY Times Bulletin Board</h1>
		      <h2>Search Page</h2>
		      <p>Search for articles and hit Save to comment on them.  Or, go to the Comments page to see what other people have to say about their favorite articles.</p>
		    </div>
				<SearchForm 
					onDateChange={this.onChange}
					dateValue={this.state.date}/>
				<SearchResults />
			</div>);
  };

 }

 export default Search;