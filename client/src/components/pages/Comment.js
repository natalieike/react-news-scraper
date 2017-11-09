import React, { Component } from "react";
import CommentForm from "../CommentForm"
import API from "../../utils/API"

class Comment extends Component {
	state={
		savedArticles: [],
		newCommentText: "",
		newCommentUser: "",
	};

  componentDidMount() {
    API.searchArticle()
      .then(res => {
        this.setState({savedArticles: res.data});
      })
      .catch(err => console.log(err));
  };

  handleComment = (event) => {
  	let commentInput = event.target.value;
    this.setState({newCommentText: commentInput});
  };

  handleUser = (event) => {
  	let userInput = event.target.value;
    this.setState({newCommentUser: userInput});
  };

  addComment = event => {
  	event.preventDefault();
  	let comment = {
  		articleId: event.target.id,
  		commentText: this.state.newCommentText,
  		commentUser: this.state.newCommentUser
  	};
  	API.saveComment(comment)
  		.then(res => {
  		  this.setState({
	  			newCommentText: "",
					newCommentUser: ""
  		  });
	      API.searchArticle()
  	    	.then(res => this.setState({savedArticles: res.data}))
    	  	.catch(err => console.log(err))}) 
  		.catch(err => console.log(err));
  }

	render() {
		let articlePanel = this.state.savedArticles.map(article => {
			return(
      <div className="panel panel-default" key={article.url}>
        <div className="panel-heading">
          <h3 className="panel-title"><a href={article.url}>{article.title}</a></h3>
        </div>
        <div className="panel-body">
          <a href={article.url}>{article.url}</a>
          <p>Date: {article.date}</p>
          <CommentForm 
          commentsArray={article.comments}
          commentValue={this.state.newCommentText}
          handleCommentChange={this.handleComment}
          userValue={this.state.newCommentUser}
          handleUserChange={this.handleUser}
          onSubmit={this.addComment}
          articleId={article._id}/>
        </div>
      </div>);
		})
		return(
		  <div>     
		    <div className="jumbotron text-center">
		      <h1>NY Times Bulletin Board</h1>
		      <h2>Comments Page</h2>
		      <p>See what people have to say about their favorite articles.  Or, go to the Search page to look for more.</p>
		    </div>
	    	{articlePanel}
	    </div>);
  };

 }

 export default Comment;