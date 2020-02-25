import React from 'react';

import './App.css';
import Navbar from './components/Navbar.js';
import Login from './components/Login.js';
import * as Data from './DATA.js';


import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";



class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    users: [],
    isLoading: false
  };
  updatedshowSearchPageState = state => {
    this.setState({ showSearchPage: state });
  };
  componentDidMount = () => {
    this.fetchInfo();
  };
  fetchInfo = () => {
    Data._getUsers().then(resp => this.setState({ users: resp }));
    console.log();
  };
  
  render() {
    const { isLoading } = this.state;
    return (
      <div className="">
      <Navbar/>
      <BrowserRouter>
          <Switch>
            <Route path="/login" component={Login} />
            <Redirect to="/login" />
            <Route path="/" component={Login} />
          </Switch>
        </BrowserRouter>
    </div>
    );
  }
}

export default BooksApp;