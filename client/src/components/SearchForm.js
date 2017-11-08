import React from "react";
import DatePicker from 'react-date-picker';

const SearchForm = props => 
  <form>
    <div className="form-group">
      <label htmlFor="searchTerms">Search:</label>
      <input
        onChange={props.handleInputChange}
        value={props.searchValue}
        name="searchTerms"
        type="text"
        className="form-control"
        placeholder="Search for Keywords in an Article"
        id="searchTerms"
      />
      <br />
      <div>
        <DatePicker
            onChange={props.onDateChange}
            value={props.dateValue}
            calendarClassName="datePickerDiv"
        />
      </div>
      <br />
      <button onClick={props.handleFormSubmit} className="btn btn-primary">
        Search
      </button>
    </div>
  </form>;

export default SearchForm;