import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from "./components/Home";
import axios from 'axios';

class App extends Component {
  componentDidMount() {
 axios.get('http://localhost:5000/')
  .then(response => {
    console.log('ujjwal');
  })
}
  render() {
    return (
      <div className="App">
	      <Router>
		      <div>
			      <Route exact path="/" component={Home} />
		      </div>
	      </Router>
      </div>
    );
  }
}

export default App;
