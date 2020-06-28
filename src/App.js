import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

// == Import
import Header from './components/Header';
import Level from './components/Level';
import Home from './components/Home';
import Carousel from './components/Carousel';
import Study from './components/Study';
import Contact from './components/Contact';
import Footer from './components/Footer';

//Import Styled
import AppStyled from './AppStyled';


import './App.css';


class App extends Component {



  render() {
    return (
     <Router>
     <AppStyled className="App">

      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/compétences" component={Level} />
      <Route path="/portfolio" component={Carousel} />
      <Route path="/parcours" component={Study} />
      <Route path="/contact" component={Contact} />


      <Footer />

    </AppStyled>
    </Router>

  );
  }
}

export default App;
