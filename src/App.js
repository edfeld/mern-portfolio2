import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import NoMatch from './pages/NoMatch'


class App extends Component {
constructor() {
  super()
  this.email = "edfeld1@gmail.com"
}
  state = {
    navSelection: 'Home',
  }
 

  navChange = ( selection ) => {
    this.setState ({navSelection : selection || 'Home' })  // if selection is falsey set to 'Home'
  }

  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={About} />
            <Route exact path="/Portfolio" component={Portfolio} />
            <Route exact path="/Contact" render={() => 
              <Contact email={this.email} />
            } 
            />
            {/* <Route exact path="/Contact" component={Contact} /> */}
            <Route component={NoMatch} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
