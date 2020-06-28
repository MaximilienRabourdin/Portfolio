import React, { Component } from 'react';
import LevelStyled from './LevelStyled';
import LinearProgress from '@material-ui/core/LinearProgress';
import MediaQuery from 'react-responsive';


class Level extends Component {
  render() {
    return (
  
  <LevelStyled>

<MediaQuery maxDeviceWidth={425}> 

<block className="mobile">


<div className="left-mobile "> 

<h2 className ="title-mobile" id="compétences"> Compétences </h2>
 
<p> Durant ma formation intensive en tant que développeur web, je me suis spécialisé sur du front-end. J'aime le fait de pourvoir avoir un résultat visuel en fin de projet. Concernant ma spécialisation, j'ai choisi REACT JS de part sa notoriété. Je suis curieux et cherche à aggrandir mon panel de connaissances dans le développement, je m'adapater à différents frameworks, par exemple en améliorant mon portfollio, j'ai découvert NODE JS du point de vue back-end afin d'effectuer mon formulaire d'envoi en bas de page.    </p>

</div>

  <div className="right-mobile"> 

    <p> React-redux </p>
    <LinearProgress variant="determinate" value={45}  color="secondary"/> <br/>
    <p> Javascript </p>
    <LinearProgress variant="determinate" value={70} color="secondary" /> <br/>
    <p> Material UI</p>
    <LinearProgress variant="determinate" value={90} color="secondary" /> <br/>
    <p> PHP </p>
    <LinearProgress variant="determinate" value={34} color="secondary" /> <br/>

  </div>

  </block>

  </MediaQuery>
 


<MediaQuery minDeviceWidth={426}>

<div className="left"> 

<h2 className ="level-title" id="compétences"> Compétences </h2>
 
 <p> Durant ma formation intensive en tant que développeur web, je me suis spécialisé sur du front-end. J'aime le fait de pourvoir avoir un résultat visuel en fin de projet. Concernant ma spécialisation, j'ai choisi REACT JS de part sa notoriété. Je suis curieux et cherche à aggrandir mon panel de connaissances dans le développement, je peux m'adapater à différents frameworks, par exemple en améliorant mon portfollio, j'ai découvert NODE JS pour la partie back-end afin d'effectuer mon formulaire d'envoi en bas de page.    </p>

</div>

  <div className="right"> 

  <ul>
    <p> React-redux </p>
    <LinearProgress variant="determinate" value={45}  color="secondary"/> <br/>
    <p> Javascript </p>
    <LinearProgress variant="determinate" value={70} color="secondary" /> <br/>
    <p> Material UI</p>
    <LinearProgress variant="determinate" value={90} color="secondary" /> <br/>
    <p> PHP </p>
    <LinearProgress variant="determinate" value={34} color="secondary" /> <br/>

  </ul>

    
  </div>

  </MediaQuery>
  </LevelStyled>

);
  
}
  }


// == Export
export default Level;
