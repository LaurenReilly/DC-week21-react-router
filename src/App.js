import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Feed from './components/Feed';
import Faq from './components/Faq';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="ml-5" style={{width:"80%"}}>
          <Switch>
              <Route path="/home" component={Home}/>
              <Route path="/faq" component={Faq} />
              <Route path="/feed" component={Feed} />
          </Switch>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
