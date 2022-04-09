
import React , {useState} from 'react';
import { GameBoxStyle } from './gameBox.style';
import { deleteGameUser } from '../../application/api';

import logoHome from '../../assets/images/logoHome.png';


const GameBox = (props) => {

  const game = props.game.game;
  const idGame = props.game.id;
  const typeBox = props.type; 

  const deleteGame = () => {
    console.log(idGame);
    deleteGameUser(idGame);
  }

  return (
    <GameBoxStyle type={typeBox}>

      <div className='GameBoxUA__image'>
        <img src={logoHome} alt="" />
      </div>

      <div className='GameBoxUA__info'>
        <div className='GameBoxUA__info__content'>
          <h4>{game.nameGame}</h4>
          <p>{game.namePlatfm}</p>
          <p>Caja: <span className='sphere'>{game.statusBox}</span></p>
          <p>Juego: <span className='sphere'>{game.statusBox}</span></p>
          <p>Lo chenji por: <i>{game.gamesToChange}</i></p>
        </div>
        <div className='GameBoxUA__info__actions'>
          <button className='btn btn--danger' onClick={deleteGame}>Eliminar</button>
        </div>
      </div>

    </GameBoxStyle>
    );

}

export default GameBox;