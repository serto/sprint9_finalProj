
import React from 'react';
import { GameCardStyle } from './gameCard.style';
import { Link } from 'react-router-dom';

const GameCard = (props) => {

  const game = props.game;
  //console.log('game :' , game);

  return (
      <GameCardStyle>
        <Link to='/' >
          <div className='imgCard'>
            <img src={game.background_image} alt={game.name} />
          </div>
          <div className='imgInfo'>
            <h3>{game.name}</h3>
            <p>Metacritic: {game.metacritic}</p>
          </div>
        </Link>
      </GameCardStyle>
    );

}

export default GameCard;