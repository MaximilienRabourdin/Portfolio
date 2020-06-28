// Composant stylisé
import styled from 'styled-components';


const LevelStyled = styled.div `

display : flex;
padding: 4rem;
margin:  2 2em;
margin-top:0.8em;
color: black;
background-color: white;
position:relative;


.level-title{
  text-transform:uppercase;
  color: #F0304A;
  font-size: 40px;
  margin-bottom:0.8em;
  font-family: 'Lato', sans-serif;
  font-weight:500;
  
}

.left{
  width:50%;
  padding-right: 2em;
  
}

.right {
  width:50%;
  line-height:4em;
}

p {
  line-height: 2em;
  font-size: 16px;
  text-align:justify;
}

ul p{
  text-transform: uppercase;
}

.mobile {
  flex-direction: column;
  
  
}

.title-mobile{
  text-transform:uppercase;
  color: #F0304A;
  font-size: 40px;
}

.left-mobile {
  margin-top:20px;
  color:blue;
  text-align:center;
 
}

.right-mobile {
  margin-top: 50px;
  color:green;
  align-content:center;
}

`;
export default LevelStyled;

