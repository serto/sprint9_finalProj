
import React from 'react';
import { GameCardStyle } from './gameCard.style';
import { Link } from 'react-router-dom';

const GameCard = (props) => {

  const game = props.game;
  //console.log('game :' , game);

  return (
      <GameCardStyle>
        <Link to='/' >
          <h2>{game.name}</h2>
          <img src={game.background_image} alt={game.name} />
          <p>Metacritic: {game.metacritic}</p>
        </Link>
      </GameCardStyle>
    );

}

export default GameCard;