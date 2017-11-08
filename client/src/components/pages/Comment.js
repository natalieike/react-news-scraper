import React, { Component } from "react";
import CommentForm from "../CommentForm"
import API from "../../utils/API"

class Comment extends Component {

	render() {
		return(
	    <div className="jumbotron text-center">
	      <h1>NY Times Bulletin Board</h1>
	      <h2>Comments Page</h2>
	      <p>See what people have to say about their favorite articles.  Or, go to the Search page to look for more.</p>
	    </div>);
  };

 }

 export default Comment;