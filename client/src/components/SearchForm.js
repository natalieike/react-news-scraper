import React from "react";
import DatePicker from 'react-datepicker';
 
import 'react-datepicker/dist/react-datepicker.css';

const SearchForm = props => 
  <form>
    <div className="form-group">
      <label htmlFor="searchTerms"><h4>Search Keywords:</h4></label>
      <input
        onChange={props.handleSearchChange}
        value={props.searchValue}
        name="searchTerms"
        type="text"
        className="form-control"
        placeholder="Search for Keywords in an Article"
        id="searchTerms"
      />
      <h4>Articles from What Date Range:</h4>
      <div className="pull-left datePickerDiv">
        <label>Start Date:</label>
        <DatePicker
          selected={props.startDate}
          onChange={props.handleStartChange}
        />
      </div>
      <div>
        <label>End Date:</label>
        <DatePicker
          selected={props.endDate}
          onChange={props.handleEndChange}
        />
      </div>
      <br />
      <button onClick={props.onSubmit} className="btn btn-primary">
        Search
      </button>
    </div>
  </form>;

export default SearchForm;