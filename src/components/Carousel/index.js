import React from 'react';
import CarouselStyled from './CarouselStyled';


import Serie from '../.././assets/images/serie.png';
import Recipes from '../.././assets/images/Frame 2.png';
import ToDoList from '../.././assets/images/ToDoList.png';
import Portfolio from '../.././assets/images/portfolio.png';




export default () => (


  <CarouselStyled >

    <div className="desktop">

      <h2 className="portfolio-title" id="portfolio"> portfolio </h2>

      <div className="flexbox">

        <div className="maincontainer1">
          <div className="thecard">

            <div className="thefront">
            <img src={Serie} alt="" className="adopteUneSerie"></img> 
            </div>

            <div className="theback">
              <h1>Adopte Une Série</h1>
              <p>
                Vous cherchez une série ou un film à regarder ce soir ?
            <br />


            Ce projet a été effectué en REACT-REDUX pour la partie front-end. La partie back a été effectué via du Symfony
        </p>

              <button > Voir </button>
              <button > Github </button>


            </div>

          </div>
        </div>



        <div className="maincontainer1">

          <div className="thecard">


            <div className="thefront">

              <img src={Recipes} alt="" className="recipes"></img>

            </div>

            <div className="theback">
              <h1>Back of Card</h1>
              <p>Your use of this site is subject to the terms and conditions governing this and all transactions.</p>


              <button > Voir </button>
              
            </div>

          </div>
        </div>



        <div className="maincontainer1">

          <div className="thecard">

            <div className="thefront">

              <img src={ToDoList} alt="" className="todolist"></img>

            </div>

            <div className="theback">
              <h1>Back of Card</h1>
              <p>
                Your use of this site is subject to the terms and conditions governing this and all transactions.
            </p>

              <button>Voir</button>



            </div>

          </div>
        </div>




        <div className="maincontainer1">

          <div className="thecard">

            <div className="thefront">
             
            <img src={Portfolio} alt="" className="todolist"></img>

            </div>

            <div className="theback">
              <h1>Portfollio V1</h1>

              <p>Your use of this site is subject to the terms and conditions governing this and all transactions.</p>

              <button>Voir</button>

           

            </div>

          </div>
        </div>

      </div>



    </div>



  </CarouselStyled>
);
