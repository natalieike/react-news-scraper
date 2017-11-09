import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Navpills from "./components/Navpills";
import Search from "./components/pages/Search";
import Comment from "./components/pages/Comment";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Navpills />
          <Redirect exact from="/" to="/search"/>
          <Route path="/search" render={() => <Search />} />
          <Route path="/comment" render={() => <Comment />} />
        </div>
      </Router>
    );
  }
}

export default App;
