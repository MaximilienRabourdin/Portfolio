// Composant stylisé
import styled from 'styled-components';


const ContactStyled = styled.div`

padding: 4rem;
margin: 2 2 6 2em;
color: black;
position:flex;
display : flex;
width: 100%;
background-color:white;
position:relative;



.title-contents{

  width:40%;
  font-family: 'Lato', sans-serif;
  font-weight:500;
}

.contact-title {
  
  text-transform:uppercase;
  color: #F0304A;
  font-size: 40px;
  margin-bottom:0.8em;
  font-family: 'Lato', sans-serif;
  font-weight:500;

}


.contact-title-mobile{
  text-transform:uppercase;
  color: #F0304A;
  font-size: 40px;
  margin-bottom:0.8em;
  text-transform: uppercase;

}


.arrow{
  color: white;

}


@media all and (max-width: 2560px)
{

.buttons {
 padding-left: 32em;
 padding-top:5em;
}

}
@media all and (max-width: 1440px)
{

.buttons {
 padding-left: 12em;
 padding-top:6em;
}
}

@media all and (max-width: 768px)
{

.buttons {
 padding-left: 3em;
 padding-top:9em;
}
}

@media all and (max-width: 425px)
{

.contact-message{

line-height: 2em;
font-size: 16px;
width:100%;
padding-bottom: 1.2em;


}


};


`;
export default ContactStyled;

