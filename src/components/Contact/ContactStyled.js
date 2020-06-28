// Composant stylisé
import styled from 'styled-components';


const ContactStyled = styled.div`

padding: 4rem;
margin: 2 2em;
color: black;
position:flex;
display : flex;
background-color:white;
position:relative;


.title-contents{
  margin: 100px auto;
  padding: 4px 100px;
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


.contact-message{

  line-height: 2em;
  font-size: 16px;

}

*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}


.container{
  width:60%;
  margin: 100px auto;
  
}

.container form{
  width: 100%;
  padding: 10px;
}




.container input,
.container textarea{
  width: 100%;
  margin:0 auto;
  padding: 10px;
  
}

.container input:focus,
.container textarea:focus{
 
  
}

.singleItem{
  margin:10px 0;
}

.btn{
  width:100%;
  text-align: center;
}

.btn button{
  width: 150px;
  font-size: 18px;
  padding: 5px 10px;
  border:1px solid #EB1F41;
  outline: none;
  transition: all 0.5s ease-in-out;
  position: relative;
  margin-top: 5px;
  border-style:none;
  background-color: #EB1F41;
  color: white;
  line-height:30px;
  border-radius: .4em;
  

}

.btn button:hover{
  border: 1px solid #fefefe;
  cursor: pointer;

}

.msg{
  text-align: center;
  margin:0 auto;
  margin-bottom: 10px;
  width: 400px;
  padding:3px;
  font-size:16px;
  border-radius: 5px;
  font-weight: bold;
  display: none;
  color:#22597B;
  background-color: white;
}

.msgAppear{
  display: block;
}

@media screen and (min-width:664px){
  .container{
    width:60%;
    margin: 100px auto;
    
   
  }
}

@media screen and (min-width:425px){
  .container{
    width:100%;
    margin: 10px auto;
    
   
  }
}

@media screen and (min-width:986px){
  .container{
    width:40%;
    margin: 100px auto;
    
   
  }
}


.mobile{
  display: flex;
  flex-direction: column;
  padding:auto;

}

.contact-title-mobile{
  text-transform:uppercase;
  color: #F0304A;
  font-size: 40px;
  margin-bottom:0.8em;
  text-transform: uppercase;

}

.contact-message-mobile{
  padding-bottom:1.2em;
  
}

.message-mobile{
  width:30vw;

}

.border-mobile{
  width:20em;
  border:1px solid black;
  border-width: 1px;
  padding: 1em;

}

.name{
  border:1px solid black;
  border-width: 1px;
  padding: 1em;
  width:48em;

}

.email{
  border:1px solid black;
  border-width: 1px;
  padding: 1em;
  width:48em;

}

.submit { 
    border:1px solid #EB1F41;
    border-style:none;
    background-color: #EB1F41;
    color: white;
    line-height:30px;
    padding: 1em;
    padding-left: 1.4em;
    padding-right: 1.4em;
    margin-bottom: 1rem;
    margin-top: 2em;
  
    }

.contents-mobile{
  flex-direction: column;
}


`;
export default ContactStyled;

