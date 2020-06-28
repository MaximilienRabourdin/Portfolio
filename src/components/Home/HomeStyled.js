// Composant stylisé
import styled from 'styled-components';

const HomeStyled = styled.div`

width: 100%;
padding-top: 1em;
height: 100vh;


@media screen and (max-width: 2560px)
{



.box {

position:relative;
color: #F0304A;
left:10em;
top:6em;
line-height: 4em;
width: 50%;
}

h1 {
  font-size: 4rem;
  color: #22597B;
  font-family: 'Lato', sans-serif;
  font-weight:300;
}

h2 {
  margin-top: 2rem;
  margin-bottom: 2rem;
  font-size: 5rem;
  font-family: 'Lato', sans-serif;
  font-weight:500;
}

h3 {
  font-size: 4rem;
  font-family: 'Lato', sans-serif;
  font-weight:300;
  color: black;
  
}

.maxi{
  position:absolute;
  right:0px;
  bottom:0px;
  max-width:2600px;
  margin: auto 0em;
  height:800px;
 

}


.contact-button {
    margin-top:1rem;
    padding: 2em;
    border:5px solid #EB1F41;
    border-radius: .4em;
    background-color: #EB1F41;
    color: white;
    text-transform: uppercase;
    font-style:16px;
    font-family: 'Lato', sans-serif;
    font-weight:300;
    text-decoration: none;
}

}

/* OK */

@media screen and (max-width: 1440px)
{


.box {

position:relative;
color: #F0304A;
left:10em;
top:1em;
line-height: 4em;
width: 50%;
}

h1 {
  font-size: 4em;
  color: #22597B;
}

h2 {
  margin-top: 2rem;
  margin-bottom: 2rem;
  font-size: 4em;
}

h3 {
  font-size: 3em;
  font-family: 'Lato', sans-serif;
  color: black;
  
}


.contact-button {
    margin-top:2rem;
    padding: 1.4em;
    border:1px solid #EB1F41;
    border-radius: .4em;
    background-color: #EB1F41;
    color: white;
    text-transform: uppercase;
    text-decoration: none;

}


.maxi {
    right:0px;
    bottom:0px;
    margin: auto 0em;
    height:500px;

  }

}

/* OK  */


@media all and (max-width: 1024px)
{

.box {

position:relative;
color: #F0304A;
left:5em;
top:1em;
line-height: 3em;
width: 50%;
}

h1 {
  font-size: 4em;
  line-height:1em;
  color: #22597B;
}

h2 {
  line-height:1em;
  font-size: 4em;
}

h3 {
  font-size: 3em;
  font-family: 'Lato', sans-serif;
  color: black;
  
}



.maxi{
  position:absolute;
  right:0px;
  bottom:0px;
  max-width:2600px;
  margin: auto 0em;
  height:500px;

}

}

@media all and (max-width: 768px)
{

.box {

position:relative;
color: #F0304A;
left:5em;
top:-3em;
line-height: 3em;
width: 50%;
}

h1 {
  font-size: 3em;
  width:4em;
  line-height:1em;
  color: #22597B;
}

h2 {
  line-height:1em;
  font-size: 3em;
}

h3 {
  font-size: 2em;
  font-family: 'Lato', sans-serif;
  color: black;
  
}



.maxi{
  position:absolute;
  right:0px;
  bottom:0px;
  max-width:2600px;
  margin: auto 0em;
  height:450px;

}

}


/* Mobile responsive OK */

.mobile {
  margin-top:1em;
  margin-bottom:1em;
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;

}


.h1Mobile{
  font-size: 2.4em;
  text-align:center;
  width:0 2em;

}

.h2Mobile{
  font-size: 4em;
  text-align:center;
  margin:0.5em;
  color:#F0264A;

}

.pMobile {
  font-size: 2em;
  text-align:center;


}

.buttonMobile{
  width: 90%;

}

.maxi-mobile {
 margin: 2em;
 align-content:center;

}

@media all and (max-width: 425px)
{

padding-bottom:20em;

}


  
`;

export default HomeStyled;

