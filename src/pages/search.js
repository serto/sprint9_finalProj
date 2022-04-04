
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
  const [nextGames, setNextGames] = useState();

  const callNextGames = () => {
    axios
      .get(nextGames)
      .then((res) => {
        //console.log('res',  res.data);
        const number = Math.random() +1;

        const gamesCall = res.data.results;
        const newGames = gamesCall.map( (game, key) =>  <GameCard game={game} key={key + number} /> )
        const newArray = games.concat(newGames);

        setGames(newArray); 
        (res.data.next) ? setNextGames(res.data.next) : setNextGames(null);
        
      });

  }

  useEffect(() => {
    const search = searchParams.get('toSearch');
    setSearchTitle(search);
    
    axios
      .get(`https://rawg.io/api/games?key=ab26bfc82b0b4c148f72b4dbbb5bc623&search=${search}&search_precise=true`)
      .then((res) => {
        //console.log(res.data.results);
        const videoGames = res.data.results;

        const arrayGames = videoGames.map( (game, key) =>  <GameCard game={game} key={key} /> );
        setGames(arrayGames);
        setNextGames(res.data.next)

      });
  }, []);


  useEffect(() => {
    
    const onScroll = () => {
      if( (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) && (nextGames) ){
        callNextGames();
      }
    }

    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);

  }, [nextGames, setNextGames])

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
