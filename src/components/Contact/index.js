import React, { Component } from 'react';
import ContactStyled from './ContactStyled';
import MediaQuery from 'react-responsive';
import "regenerator-runtime/runtime.js";

import { Button, Icon, Container } from 'semantic-ui-react'



export default class Contact extends Component {


  // state = {
  //   name: '',
  //   email: '',
  //   message: '',
  //   sent: false,
  //   buttonText: 'Send Message',

  // }


  // // handle inputs 

  // handleName = (e) => {
  //   this.setState({
  //     name: e.target.value
  //   })
  // }


  // handleEmail = (e) => {
  //   this.setState({
  //     email: e.target.value
  //   })
  // }

  // handleMessage = (e) => {
  //   this.setState({
  //     message: e.target.value
  //   })
  // }

  // // end of handle inputs



  // formSubmit = (e) => {
  //   e.preventDefault();



  //   let data = {
  //     name: this.state.name,
  //     email: this.state.email,
  //     message: this.state.message
  //   }




  //   axios.post('/api/forma', data)
  //     .then(res => {
  //       this.setState({
  //         sent: true,
  //       }, this.resetForm())
  //     })
  //     .catch(() => {
  //       console.log('message not send');

  //     })


  // }

  // // for reseting the form data
  // resetForm = () => {
  //   this.setState({
  //     name: '',
  //     message: '',
  //     email: '',

  //   })

  //   setTimeout(() => {
  //     this.setState({
  //       sent: false,



  //     })
  //   }, 20000)
  // }


  render() {
    return (

      <ContactStyled>

        <MediaQuery maxDeviceWidth={425}>

          <div className="contents-mobile">

            <div className="title-contents-mobile">

              <h1 className="contact-title-mobile" id="contact"> Contact </h1>

              <p className="contact-message"> Je suis une personne curieuse, passionné par le déveveloppement, les technologies et même la cuisine japonaise... mais chut faut pas le dire !</p>


            </div>



<div className="buttons-mobile"> 
         
            <Button
              animated
              compact
              fluid
              size='medium'
              color='black'
              href="https://github.com/MaximilienRabourdin"
              
            >
              <Button.Content visible>  <Icon name='github' /> Github</Button.Content>
              <Button.Content hidden>
                <Icon name='arrow right' className="arrow" />
              </Button.Content>
            </Button>

            <Button
              animated
              compact
              fluid
              size='medium'
              color='linkedin'
          
              href="https://www.linkedin.com/in/maximilien-rabourdin-523b94b4/"
              compact
            >
              <Button.Content visible>  <Icon name='linkedin' /> Linkedin</Button.Content>
              <Button.Content hidden>
                <Icon name='arrow right' className="arrow" />
              </Button.Content>
            </Button>



            <Button
              animated
              compact
              fluid
              size='medium'
              color='instagram'
              href="mailto: maximilien.rabourdin@gmail.com"
              compact
            >
              <Button.Content visible>  <Icon name='mail' /> E-mail</Button.Content>
              <Button.Content hidden>
                <Icon name='arrow right' className="arrow" />
              </Button.Content>
            </Button>

            
</div>

          </div>


        </MediaQuery>



        <MediaQuery minDeviceWidth={426}>

     
         
          <div className="title-contents">

            <h1 className="contact-title" id="contact"> Contact </h1>

            <p className="contact-message"> Je suis une personne curieuse, passionné par le déveveloppement, les technologies et même la cuisine japonaise... mais chut faut pas le dire !</p>

          </div>

          
      


<div className="buttons"> 
          <Button.Group>
            <Button
              animated
              compact
              size='big'
              color='black'
              href="https://github.com/MaximilienRabourdin"
              compact
            >
              <Button.Content visible>  <Icon name='github' /> Github</Button.Content>
              <Button.Content hidden>
                <Icon name='arrow right' className="arrow" />
              </Button.Content>
            </Button>

            <Button
              animated
              compact
              size='big'
              color='linkedin'
          
              href="https://www.linkedin.com/in/maximilien-rabourdin-523b94b4/"
              compact
            >
              <Button.Content visible>  <Icon name='linkedin' /> Linkedin</Button.Content>
              <Button.Content hidden>
                <Icon name='arrow right' className="arrow" />
              </Button.Content>
            </Button>



            <Button
              animated
              compact
              size='big'
              color='instagram'
              href="mailto: maximilien.rabourdin@gmail.com"
              compact
            >
              <Button.Content visible>  <Icon name='mail' /> E-mail</Button.Content>
              <Button.Content hidden>
                <Icon name='arrow right' className="arrow" />
              </Button.Content>
            </Button>

            </Button.Group> 
</div>



        </MediaQuery>

      </ContactStyled>


    );

  }
}
