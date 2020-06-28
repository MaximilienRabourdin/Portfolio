// Composant stylisé
import styled from 'styled-components';


const LevelStyled = styled.div `

display : flex;
padding: 4rem;
margin: 2 2em;
color: black;

.level-title{
  text-transform:uppercase;
  color: #F0304A;
  font-size: 40px;
  margin-bottom:0.8em;
  
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
  font-size: 16px
}

ul p{
  text-transform: uppercase;
}


`;
export default LevelStyled;

