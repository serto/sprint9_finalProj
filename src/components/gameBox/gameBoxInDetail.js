
import React , {useState} from 'react';
import { Link } from 'react-router-dom';
import { GameBoxStyle } from './gameBox.style';

import logoHome from '../../assets/images/logoHome.png';


const GameBoxInDetail = (props) => {

  const game = props.game.game;
  const id = props.game.id;
  const typeBox = props.type; 

  return (
    <GameBoxStyle type={typeBox}>
      
      <Link to="/">
        <div className='GameBoxUA__image'>
          <img src={logoHome} alt="" />
        </div>

        <div className='GameBoxUA__info'>
          <div className='GameBoxUA__info__content'>
            <h4>{game.nameGame}</h4>
            <p>{game.namePlatfm}</p>
            <p>Caja: <span className='sphere'>{game.statusBox}</span></p>
            <p>Juego: <span className='sphere'>{game.statusGame}</span></p>
            <p>Lo chenji por: <i>{game.gamesToChange}</i></p>
          </div>
        </div>
      </Link>

    </GameBoxStyle>
    );

}

export default GameBoxInDetail;