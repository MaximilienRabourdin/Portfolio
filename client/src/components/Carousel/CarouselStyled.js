// Composant stylisé
import styled from 'styled-components';


const CarouselStyled = styled.div`


width: 100%;
max-width: 3000px;
margin: 0 auto;
height:100vh;
background-color:white;




@media screen and (max-width: 2600px)
{

  
.portfolio-title {
  text-transform:uppercase;
  color: #F0304A;
  font-size: 40px;
  padding-left: 64px;
  font-family: 'Lato', sans-serif;
  font-weight:500;
  
}

.flexbox{
  display:flex;

}

.maincontainer1{
  width: 800px;
  height: 400px;
  flex-wrap:wrap;
  background: none;
  margin-top: 3em;
  padding-bottom:1em;
  padding: 0 4em;
  .maincontainer1:first-child { padding-left: 0; }

}


.thecard{
  position: relative;
  top: 0;
  left: 0;
  min-width:200px;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  transform-style: preserve-3d;
  transition: all 0.9s ease;
}

.thefront{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  backface-visibility: hidden;
  overflow: hidden;
  background: #F0234A;
  color: white;
}

.adopteUneSerie{
  width: 100%;
  height: 100%;
}

.recipes {
  width: 100%;
  height: 100%;
    
}

.todolist {
  width: 100%;
  height: 100%;
}

.theback{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  backface-visibility: hidden;
  overflow: hidden;
  background: #22597B;
  color: #333;
  text-align: center;
  transform: rotateY(180deg);
}

.thefront h1, .theback h1{
 
  padding: 30px;
  font-weight: bold;
  font-size: 24px;
  text-align: center;
  color:#DED1CA;
}

.thefront p, .theback p{
  padding: 30px;
  font-weight: normal;
  font-size: 20px;
  text-align: center;
  color:#DED1CA;
};

.thecard:hover{
  transform: rotateY(180deg);
}

button{
 
    padding: 1em;
    border:1px solid #EB1F41;
    border-radius: .4em;
    background-color: #EB1F41;
    color: white;
    text-transform: uppercase;
  
}
}


@media screen and (max-width: 1440px)
{

 width: 100%;
 position:center;

  .portfolio-title {
  text-transform:uppercase;
  color: #F0304A;
  font-size: 40px;
  padding-left: 64px;
  
}

.flexbox{
  display:flex;
  

}

.maincontainer1{
  width: 900px;
  height: 400px;
  flex-wrap:wrap;
  background: none;
  margin-top: 3em;
  padding-bottom:1em;
  padding: 0 1em;
  .maincontainer1:first-child { padding-left: 0; }

}


.thecard{
  position: relative;
  top: 0;
  left: 0;
  min-width:200px;
  width: 20px;
  height: 15px;
  border-radius: 10px;
  transform-style: preserve-3d;
  transition: all 0.9s ease;
}

.thefront{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  backface-visibility: hidden;
  overflow: hidden;
  background: #F0234A;
  color: white;
}

.adopteUneSerie{
  width: 100%;
  height: 100%;
}

.recipes {
  width: 100%;
  height: 100%;

}

.todolist {
  width: 100%;
  height: 100%;
}

.theback{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  backface-visibility: hidden;
  overflow: hidden;
  background: #22597B;
  color: #333;
  text-align: center;
  transform: rotateY(180deg);
}



.thefront h1, .theback h1{
 
  padding: 30px;
  font-weight: bold;
  font-size: 24px;
  text-align: center;
  color:#DED1CA;
}

.thefront p, .theback p{
  padding: 30px;
  font-weight: normal;
  font-size: 30px;
  text-align: center;
  color:#DED1CA;
};

.thecard:hover{
  transform: rotateY(180deg);
}

button{
 
    padding: 1em;
    border:1px solid #EB1F41;
    border-radius: .4em;
    background-color: #EB1F41;
    color: white;
    text-transform: uppercase;
  
}
}

@media screen and (max-width: 1024px)
{

margin-bottom:20em;
margin-left:76px;


.portfolio-title {
  text-transform:uppercase;
  color: #F0304A;
  font-size: 40px;
  padding-left: 64px;
  
}

.flexbox{
  display:flex;

}

.maincontainer1{
  width: 1px;
  height:1px;
  flex-wrap:wrap;
  background: none;
  margin-top: 3em;
  padding-bottom:1em;
  padding: 0 1em;
  .maincontainer1:first-child { padding-left: 0; }

}


.thecard{
  position: relative;
  min-width:200px;
  width: 20px;
  height: 15px;
  border-radius: 10px;
  transform-style: preserve-3d;
  transition: all 0.9s ease;
}

.thefront{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  backface-visibility: hidden;
  overflow: hidden;
  background: #F0234A;
  color: white;
}

.adopteUneSerie{
  width: 100%;
  height: 100%;
}

.recipes {
  width: 100%;
  height: 100%;

}

.todolist {
  width: 100%;
  height: 100%;
}

.theback{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  backface-visibility: hidden;
  overflow: hidden;
  background: #22597B;
  color: #333;
  text-align: center;
  transform: rotateY(180deg);
}



.thefront h1, .theback h1{
 
  padding: 30px;
  font-weight: bold;
  font-size: 24px;
  text-align: center;
  color:#DED1CA;
}

.thefront p, .theback p{
  padding: 30px;
  font-weight: normal;
  font-size: 20px;
  text-align: center;
  color:#DED1CA;
};

.thecard:hover{
  transform: rotateY(180deg);
}

button{
 
    padding: 1em;
    border:1px solid #EB1F41;
    border-radius: .4em;
    background-color: #EB1F41;
    color: white;
    text-transform: uppercase;
  
}
}


@media screen and (max-width: 1440px)
{
  margin: 0 4em;
  margin-bottom:20em;
 
  .portfolio-title {
  text-transform:uppercase;
  color: #F0304A;
  font-size: 40px;
  padding-left: 64px;
  
}

.flexbox{
  display:flex;
  flex-wrap:wrap;
  padding-left:70
}


.maincontainer1{
  width: 400px;
  height: 400px;
  flex-wrap:wrap;
  background: none;
  margin-top: 3em;
  padding-bottom:1em;
  padding: 0 1em;
  .maincontainer1:first-child { padding-left: 0; }

}


.thecard{
  position: relative;
  top: 0;
  left: 0;
  min-width:200px;
  width: 20px;
  height: 15px;
  border-radius: 10px;
  transform-style: preserve-3d;
  transition: all 0.9s ease;
}

.thefront{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  backface-visibility: hidden;
  overflow: hidden;
  background: #F0234A;
  color: white;
}

.adopteUneSerie{
  width: 100%;
  height: 100%;
}

.recipes {
  width: 100%;
  height: 100%;

}

.todolist {
  width: 100%;
  height: 100%;
}

.theback{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  backface-visibility: hidden;
  overflow: hidden;
  background: #22597B;
  color: #333;
  text-align: center;
  transform: rotateY(180deg);
}



.thefront h1, .theback h1{
 
  padding: 30px;
  font-weight: bold;
  font-size: 24px;
  text-align: center;
  color:#DED1CA;
}

.thefront p, .theback p{
  padding: 30px;
  font-weight: normal;
  font-size: 20px;
  text-align: center;
  color:#DED1CA;
};

.thecard:hover{
  transform: rotateY(180deg);
}

button{
 
    padding: 1em;
    border:1px solid #EB1F41;
    border-radius: .4em;
    background-color: #EB1F41;
    color: white;
    text-transform: uppercase;
  
}
}

@media screen and (max-width: 768px)
{
  margin: 0 4em;
  margin-bottom:80em;
 
.portfolio-title{
  padding-left: 1px;

}

.flexbox{
display:flex;
flex-wrap:wrap;

}


}

/* JOUER AVEC LES MARGES ET LA TAILLE 425 */

@media screen and (max-width: 425px)
{
  margin: 0 2em;
  margin-bottom:72em;

}




.mobile {

padding-bottom:200em;
position:center;

}


.flexbox-mobile {
  flex-direction:column;
 
}



.thecard{ 
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  transform-style: preserve-3d;
  transition: all 0.9s ease;
}



.maincontaine-mobile{
  width: 100%;
  height: 500px;
  background: none;
  margin-top: 4em;
  padding-bottom:2em;

  
}


.thecard:hover{
  transform: rotateY(180deg);
}

.thecard-mobile{
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  transform-style: preserve-3d;
  transition: all 0.9s ease;
}

.thecard-mobile:hover{
  transform: rotateY(180deg);
}

.thefront{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  backface-visibility: hidden;
  overflow: hidden;
  background: #F0234A;
  color: white;
}

.adopteUneSerie{
  width: 100%;
  height: 100%;
}

.recipes {
  width: 100%;
  height: 100%;

}

.todolist {
  width: 100%;
  height: 100%;
}

.theback{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  backface-visibility: hidden;
  overflow: hidden;
  background: #22597B;
  color: #333;
  text-align: center;
  transform: rotateY(180deg);
}

.thefront h1, .theback h1{
  font-family: 'zilla slab', sans-serif;
  padding: 30px;
  font-weight: bold;
  font-size: 24px;
  text-align: center;
}

.thefront p, .theback p{
  font-family: 'zilla slab', sans-serif;
  padding: 30px;
  font-weight: normal;
  font-size: 12px;
  text-align: center;
};





`;
export default CarouselStyled;
