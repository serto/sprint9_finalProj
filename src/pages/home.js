
import React, { useState, useEffect, useContext } from "react";

import { AppContext } from '../application/provider';
import { Api_Key } from "../application/api_key";

import { Link } from 'react-router-dom';
import Header from '../components/header/header';
import { WrapperBig } from '../assets/styles/styles';
import GameCard from "../components/gameCard/gameCard";
import { GameCardWrapper  } from "../components/gameCard/gameCard.style";
import logoHome from '../assets/images/logoHome.png';
import Footer from '../components/footer/footer';

import axios from "axios";

const Home = (_) => {

  const [state, setState] = useContext(AppContext);
  const [games, setGames] = useState([]);

  useEffect(() => {
    
    axios
      .get(`https://rawg.io/api/games?key=${Api_Key}`)
      .then((res) => {
        //console.log(res.data.results);
        const videoGames = res.data.results;

        const arrayGames = videoGames.map( (game, key) =>  <GameCard game={game} key={key} /> );
        setGames(arrayGames);

      });
  }, []);

  return (
    <>
      <Header />
      <WrapperBig>
        
        <div className="centerContent">

          <div className="imageLogoHome">
            <img src={logoHome} alt="Chenji logo" />
          </div>
        
          <p>Bienvenido a Chenji 2.0. El reborn.</p>
          <p>Tu plataforma de intercambio de videojuegos y buscador de información de juegos. Más rápida. Más sencilla. Más juegos. Más intercambios</p>
        
          { state ? 

              <div className="boxButtonActions">
                <p>¡ Inserta un juego nuevo !</p>
                <div>
                  <Link to="/insertGame" className="btn">Nuevo juego</Link>
                </div>
              </div>

            :

              <div className="boxButtonActions">
                <p>Entra en el site y empieza a cambiar tus juegos</p>
                <div>
                  <Link to="/loginSignUp" className="btn">Log In</Link>
                  <Link to="/loginSignUp" className="btn">Resgistrate</Link>
                </div>
              </div>

          }

        </div>


        <h2>Juegos más destacados :</h2>
        <GameCardWrapper>
          { games }
        </GameCardWrapper>

      </WrapperBig>
      <Footer />
    </>
  );

}

export default Home;
