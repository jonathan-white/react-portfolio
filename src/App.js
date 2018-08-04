import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

  // Import Components
import Header from './components/Header/';
import Footer from './components/Footer/';
import NavTabs from './components/NavTabs/';

// Import Page Components
import About from './components/_pages/About';
import Portfolio from './components/_pages/Portfolio';
import Contact from './components/_pages/Contact';
import NoMatch from './components/_pages/404';
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
            <Route exact path="/404" component={NoMatch} />
            <Route component={NoMatch} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
