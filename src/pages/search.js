
import React, { useState, useEffect } from "react";

import Header from '../components/header/header';
import { WrapperBig } from '../assets/styles/styles';
import { useSearchParams } from "react-router-dom";
import GameCard from "../components/gameCard/gameCard";
import { GameCardWrapper  } from "../components/gameCard/gameCard.style";
import Loader from '../components/loader/loader';

import axios from "axios";

const Search = (_) => {


  const [games, setGames] = useState([]);
  const [searchParams] = useSearchParams();
  const [searchTitle, setSearchTitle] = useState();

  useEffect(() => {
    const search = searchParams.get('toSearch');
    setSearchTitle(search);
    
    axios
      .get(`https://rawg.io/api/games?key=ab26bfc82b0b4c148f72b4dbbb5bc623&search=${search}`)
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

        {games.length > 0 ?
          <>
            <h2>Resultados para : {searchTitle}</h2>

            <GameCardWrapper>
              { games }
            </GameCardWrapper>
          </>
        :
          <Loader />
        }

      </WrapperBig>
    </>
  );

}

export default Search;
