// Composant stylisé
import styled from 'styled-components';


const StudyStyled = styled.div`

padding: 4em;
margin: 0 auto;
width: auto;
background-color:#FAFAFA;
position:relative;
margin: 2 2em;

.study-title {
text-transform:uppercase;
margin-bottom:0.8em;
color: #F0304A;
font-size: 40px;
font-family: 'Lato', sans-serif;
font-weight:500;

}

.test{
  border: none !important;
}

.all {
  display:flex;
  justify-content: space-around;
  margin: 100px auto;
  width:100%;

}

.all-mobile{
  flex-direction: column;
  width:auto;
}

.maincontainer{

flex-direction:row;
width:33%;

}

.message{
  line-height: 2em;
  font-size: 16px;
  text-align:justify;
  
}

.maincontainer-mobile{
  width: 10em;
}

.p-mobile{
  width:20em;
}



.thecard{
margin-right:20px;
padding-bottom:2em;
height: 100%;
.maincontainer1:first-child { padding-left: 0; }

}

h3{
  color: #22597b
}

.date{
  font-style: bold sans-serif;
  color:black;
}

@media screen and (max-width: 1280px)
{
  width: auto;
}


@media all and (max-width: 1024px)
{
  width: auto;
}
`;
export default StudyStyled;

