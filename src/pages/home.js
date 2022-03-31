
import React, { useState, useEffect } from "react";

import Header from '../components/header/header';
import { WrapperBig } from '../assets/styles/styles';
import GameCard from "../components/gameCard/gameCard";
import { GameCardWrapper  } from "../components/gameCard/gameCard.style";

import axios from "axios";

const Home = (_) => {


  const [games, setGames] = useState([]);

  useEffect(() => {
    
    axios
      .get(`https://rawg.io/api/games?key=ab26bfc82b0b4c148f72b4dbbb5bc623`)
      .then((res) => {
        console.log(res.data.results);
        
        const videoGames = res.data.results;

        const arrayGames = videoGames.map( (game, key) =>  <GameCard game={game} key={key} /> );
        setGames(arrayGames);

      });
  }, []);

  return (
    <>
      <Header />
      <WrapperBig>
        <p>La home chenji 2.0</p>

        <GameCardWrapper>
          { games }
        </GameCardWrapper>

      </WrapperBig>
    </>
  );

}

export default Home;
