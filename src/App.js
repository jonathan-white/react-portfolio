import React, { Component } from 'react';
import { 
  BrowserRouter as Router, 
  Route,
  Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NavTabs from './components/NavTabs/NavTabs';
import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';
import NoMatch from './components/pages/NoMatch';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Header />
        <NavTabs />
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/my-work" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
          <Route component={NoMatch} />
        </Switch>
        <Footer />
      </div>
      </Router>
    );
  }
}

export default App;
