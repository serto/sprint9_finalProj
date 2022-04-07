
import React , {useState} from 'react';
import { GameBoxStyle } from './gameBox.style';

import logoHome from '../../assets/images/logoHome.png';


const GameBox = (props) => {

  const game = props.game;

  return (
    <GameBoxStyle>
      
      <div className='GameBoxUA__image'>
        <img src={logoHome} alt="" />
      </div>

      <div className='GameBoxUA__info'>
        <div className='GameBoxUA__info__content'>
          <h4>{game.nameGame}</h4>
          <p>{game.namePlatfm}</p>
          <p>Caja: <span className='sphere'>{game.statusBox}</span></p>
          <p>Juego: <span className='sphere'>{game.statusGame}</span></p>
        </div>
        <div className='GameBoxUA__info__actions'>
          <button className='btn btn--danger'>Eliminar</button>
        </div>
      </div>

    </GameBoxStyle>
    );

}

export default GameBox;