// Composant stylisé
import styled from 'styled-components';


const HeaderStyled = styled.header `

padding: 1em;
color: black;

width:100%;

.menu {
  position: relative ;
  display: flex;
  justify-content: space-around;
  width: 90%;
  margin: 2em;
  color: black;
  size: 20px;
  text-transform: uppercase;


  
  .button:hover {
    border:1px solid #EB1F41;
    background-color: #EB1F41;
    color: white;
    
  }

}

.mobile {

  color: white;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mobilebox:hover {
    border:1px solid #EB1F41;
    background-color: #EB1F41;
    color: white;
  }


.header{
  
}


`;
export default HeaderStyled;

