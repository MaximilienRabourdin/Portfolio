import React from 'react';
import MediaQuery from 'react-responsive';
import {Link} from 'react-router-dom';


//Styled
import HomeStyled from './HomeStyled';


//Import Images
import MaxMobile from '../.././assets/images/max-mobile.png';
import Maximilien from '../.././assets/images/maxi.png';

//== Composant
const Home = () => ( 

  <HomeStyled >


  <MediaQuery maxDeviceWidth={425}>

<div className="mobile">

      
      <h1 className='h1Mobile' > Maximilien Rabourdin</h1>
      <h2 className='h2Mobile'> Développeur Front-End</h2>
      <h3 className='pMobile'>Spécialisation React </h3>
      <img 
src={MaxMobile} alt="Max-mobile" className="maxi-mobile"></img>


      <Link className='buttonMobile' to="/contact"> Contactez-moi </Link>

     
</div>  


  </MediaQuery>

  <MediaQuery minDeviceWidth={426}>

    <div className='box'>

      <h1> Maximilien Rabourdin </h1>
      <h2> Développeur Front-End </h2>
      <h3> Spécialisation React </h3>
      <Link className="contact-button" to="/contact" > Contactez-moi </Link>

    </div>
    
    <img 
    src={Maximilien} 
    alt="Max" 
    className="maxi">
 
    </img>

  </MediaQuery>

  
</HomeStyled>

);

// == Export
export default Home;
