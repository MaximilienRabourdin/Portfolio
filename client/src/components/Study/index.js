import React from 'react';

import StudyStyled from './StudyStyled';
import MediaQuery from 'react-responsive';


//Materia-UI
import Divider from '@material-ui/core/Divider';


const Study = () => (

<StudyStyled>

<MediaQuery maxDeviceWidth={425}>

<div className="mobile"> 

<h2 className ="study-title" id="parcour"> Parcours </h2>

<div className="all-mobile">
  

<div className="maincontainer-mobile">

<div className="thecard">
<h3>O'clock </h3> 
<p className ="date "> 2019-2020 </p>
<p className="p-mobile"> J'ai effectué une formation intensive en tant développeur web qui a duré 5 mois.</p>

</div>
</div>

<Divider variant="middle" flexItem  />

<div className="maincontainer-mobile">

<div className="thecard">
<h3>Nouvelle Zélande </h3> 
<p className ="date "> 2018-2019 </p>
<p className="p-mobile"> J'ai effectué une formation intensive en tant développeur web qui a duré 5 mois.</p> 

</div>
</div>

<Divider variant="middle" flexItem />

<div className="maincontainer-mobile">

<div className="thecard">
<h3> Cyconia </h3> 
<p className ="date "> 2017-2018 </p>
<p className="p-mobile"> J'ai effectué une formation intensive en tant développeur web qui a duré 5 mois.</p>
</div>
</div>

</div>
</div>

</MediaQuery>





<MediaQuery minDeviceWidth={426}>


<h2 className ="study-title" id="parcour"> Parcours </h2>

<div className="all">
  

<div className="maincontainer">

<div className="thecard">
<h3>O'clock </h3> 
<p className ="date "> 2019-2020 </p>
<p className="message">  J'ai effectué une formation intensive en tant développeur web qui a duré 6 mois avec 1 mois pour créer un site web from scratchn. Adopte Une Série </p> 


</div>
</div>


<div className="maincontainer">

<div className="thecard">
<h3>Nouvelle Zélande </h3> 
<p className ="date "> 2018-2019 </p>
<p className="message">  J'ai choisi de partir en Nouvelle-Zélande pour découvrir leur culture et pour améliorer mon niveau en anglais. J'ai pour cela travailler en tant serveur dans un restaurant du côté de Christchurch. </p> 

</div>
</div>


<div className="maincontainer">

<div className="thecard">
<h3> Cyconia </h3> 
<p className ="date "> 2017-2018 </p>
<p className="message"> Mon expérience en tant que Business Developer chez Cyconia a éveillé mon interet pour le développement web. J'ai pu être en collaboration quotidiennement avec des développeurs et découvrir les joies du code.   </p> 

</div>
</div>

</div>

</MediaQuery>

</StudyStyled>

);

// == Export
export default Study;
