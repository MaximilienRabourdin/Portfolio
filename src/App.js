import React, { Component } from 'react';

//Import Semantic-UI React
import 'semantic-ui-css/semantic.min.css'

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
     
     <AppStyled className="App">

      <Header />
      <Home /> 
      <Level/>
      <Carousel/>
      <Study/>
      <Contact />


      <Footer />

    </AppStyled>
   

  );
  }
}

export default App;
