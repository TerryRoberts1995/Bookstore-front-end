import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './navigation/navBar';
import Home from './home';
import AddBooks from './addBooks';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Router>
          <NavBar/>

          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/add' component={AddBooks} />
          </Switch>
        </Router>
      </div>
    );
  }
}
