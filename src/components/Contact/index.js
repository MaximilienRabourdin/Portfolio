import React, { Component } from 'react';
import ContactStyled from './ContactStyled';
import MediaQuery from 'react-responsive';
import "regenerator-runtime/runtime.js";


import axios from 'axios';



export default class Contact extends Component {


  state = {
    name: '',
    email: '',
    message: '',
    sent: false,
    buttonText: 'Send Message',

  }


  // handle inputs 

  handleName = (e) => {
    this.setState({
      name: e.target.value
    })
  }


  handleEmail = (e) => {
    this.setState({
      email: e.target.value
    })
  }

  handleMessage = (e) => {
    this.setState({
      message: e.target.value
    })
  }

  // end of handle inputs



  formSubmit = (e) => {
    e.preventDefault();



    let data = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    }




    axios.post('/api/forma', data)
      .then(res => {
        this.setState({
          sent: true,
        }, this.resetForm())
      })
      .catch(() => {
        console.log('message not send');

      })


  }

  // for reseting the form data
  resetForm = () => {
    this.setState({
      name: '',
      message: '',
      email: '',

    })

    setTimeout(() => {
      this.setState({
        sent: false,



      })
    }, 20000)
  }


  render() {
    return (

      <ContactStyled>

         <MediaQuery maxDeviceWidth={425}>

          <div className="contents-mobile">

         <div className="title-contents-mobile">

            <h1 className="contact-title-mobile" id="contact"> Contact </h1>

            <p className="contact-message"> Je suis une personne curieuse, passionné par le déveveloppement, les technologies et même la cuisine japonaise... mais chut faut pas le dire !</p>

            
          </div>

          <div className="container">
            <form onSubmit={this.formSubmit}>

              <div className="singleItem">
                <label htmlFor="name"> Nom </label>

                <input
                  type="text"
                  name="name"
                  className="name"
                  value={this.state.name}
                  onChange={this.handleName}
                  placeholder="Qui êtes-vous ?" required />

              </div>


              <div className="singleItem">
                <label htmlFor="email">Email</label>

                <input
                  type="email"
                  name="email"
                  className="email"
                  value={this.state.email}
                  onChange={this.handleEmail}
                  placeholder="Votre adresse mail..." required />

              </div>


              <div className="textArea singleItem">
                <label htmlFor="message">Message</label>

                <textarea
                  name="message"
                  value={this.state.message}
                  id="" cols="30" rows="5"
                  placeholder="Votre message..."
                  onChange={this.handleMessage}>
                </textarea>


              </div>


              <div className={this.state.sent ? 'msg msgAppear' : 'msg'}> Votre message a bien été envoyé  </div>

              <div className="btn">

                <button type="submit">Envoyer</button>

              </div>

            </form>
          </div>

          </div>
          

        </MediaQuery> 









        <MediaQuery minDeviceWidth={426}>

          <div className="title-contents">

            <h1 className="contact-title" id="contact"> Contact </h1>

            <p className="contact-message"> Je suis une personne curieuse, passionné par le déveveloppement, les technologies et même la cuisine japonaise... mais chut faut pas le dire !</p>

            
          </div>

          <div className="container">
            <form onSubmit={this.formSubmit}>

              <div className="singleItem">
                <label htmlFor="name"> Nom </label>

                <input
                  type="text"
                  name="name"
                  className="name"
                  value={this.state.name}
                  onChange={this.handleName}
                  placeholder="Qui êtes-vous ?" required />

              </div>


              <div className="singleItem">
                <label htmlFor="email">Email</label>

                <input
                  type="email"
                  name="email"
                  className="email"
                  value={this.state.email}
                  onChange={this.handleEmail}
                  placeholder="Votre adresse mail..." required />

              </div>


              <div className="textArea singleItem">
                <label htmlFor="message">Message</label>

                <textarea
                  name="message"
                  value={this.state.message}
                  id="" cols="30" rows="5"
                  placeholder="Votre message..."
                  onChange={this.handleMessage}>
                </textarea>


              </div>


              <div className={this.state.sent ? 'msg msgAppear' : 'msg'}> Votre message a bien été envoyé  </div>

              <div className="btn">

                <button type="submit">Envoyer</button>

              </div>

            </form>
          </div>

        </MediaQuery>

      </ContactStyled>


    );

  }
}
