import React from "react";
import moment from "moment";

const SearchResults = props => {
  let resultPanel = props.results.map((result, i) => {
    return(
      <div className="panel panel-default" key={result.web_url}>
        <div className="panel-heading">
          <h3 className="panel-title"><a href={result.web_url}>{result.headline.main}</a></h3>
        </div>
        <div className="panel-body">
          <p>{result.snippet}</p>
          <a href={result.web_url}>{result.web_url}</a>
          <p>Date: {moment(result.pub_date).format("MM-DD-YYYY hh:mm:ss")}</p>
          <button className="btn btn-primary" onClick={props.onSave} id={i}>Save</button>
        </div>
      </div>
  )});

  return(
    <div>
      <h3>Search Results</h3>
      {resultPanel}
    </div>
  );
};

export default SearchResults;