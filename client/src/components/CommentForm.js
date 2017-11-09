import React from "react";
import moment from "moment";

const SearchForm = props => {
	let commentsDiv = props.commentsArray.map(comment => {
		return(
      <div className="panel panel-default" key={comment._id}>
        <div className="panel-body">
          <p>{comment.commentText}</p>
          <p>User: {comment.commentUser}</p>
          <p>Date: {moment(comment.commentTime).format("MM-DD-YYYY hh:mm:ss")}</p>
        </div>
      </div>
  	)
	})
	return(
		<div>	
			{commentsDiv}
		  <form>
		    <div className="form-group">
		      <label htmlFor="commentText"><h4>Add a Comment:</h4></label>
		      <input
		        onChange={props.handleCommentChange}
		        value={props.commentValue}
		        name="commentText"
		        type="text"
		        className="form-control"
		        placeholder="Add a Comment"
		        id="commentText"
		      />
					<label htmlFor="commentUser"><h4>User Name:</h4></label>
		      <input
		        onChange={props.handleUserChange}
		        value={props.userValue}
		        name="commentUser"
		        type="text"
		        className="form-control"
		        placeholder="User Name"
		        id="commentUser"
		      />		      
		      <br />
		      <button onClick={props.onSubmit} className="btn btn-primary" id={props.articleId}>
		        Add
		      </button>
		    </div>
		  </form>
		</div>
	);
};

export default SearchForm;