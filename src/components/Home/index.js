import React from 'react';
import MediaQuery from 'react-responsive';

//Styled
import HomeStyled from './HomeStyled';


//Import Images
import MaxMobile from '../.././assets/images/max-mobile.png';
import Maximilien from '../.././assets/images/maxi.png';

//== Composant
const Home = () => ( 

  <HomeStyled >


  <MediaQuery maxDeviceWidth={425}>

<div className="mobile" id="accueil">

      
      <h1 className='h1Mobile' > Maximilien Rabourdin</h1>
      <h2 className='h2Mobile'> Développeur Front-End</h2>
      <h3 className='pMobile'>Spécialisation React </h3>
      <img 
src={MaxMobile} alt="Max-mobile" className="maxi-mobile"></img>


      <a
      className='buttonMobile'
      href="mailto: maximilien.rabourdin@gmail.com" > Contactez-moi </a>
      

     
</div>  


  </MediaQuery>

  <MediaQuery minDeviceWidth={426}>

    <div className='box'>

      <h1> Maximilien Rabourdin </h1>
      <h2> Développeur Front-End </h2>
      <h3> Spécialisation React </h3>

          
    <a className="contact-button" href="mailto:maximilien.rabourdin@gmail.com" > Contactez-moi </a>

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
