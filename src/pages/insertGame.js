import { useState } from 'react';
import { createNewGame } from '../application/api';

import Header from '../components/header/header';
import { WrapperContent } from '../assets/styles/styles';
import Footer from '../components/footer/footer';

const InsertGame = (_) => {


  const [nameGame, setNameGame] = useState(null);
  const [namePlatfm, setNamePlatfm] = useState(null);
  const [statusGame, setStatusGame] = useState(0);
  const [statusBox, setStatusBox] = useState(0);

  const idUser = 'XvwXEM0WQPMM3F2kUNdn';

  const createGame = (event) => {
    event.preventDefault();
    createNewGame(nameGame, namePlatfm, statusGame, statusBox, idUser);
  }

  return (
    <>
      <Header />
      <WrapperContent>


        <form>

          <h2 className='t-t2'>Inserta tu juego</h2>

          <div>
            <label>Nombre del juego</label>
            <input
              type="text"
              onChange={e => setNameGame(e.target.value)}
              placeholder="God of War, Fifa 18, Uncharted ..." />
          </div>

          <div>
            <label>Plataforma</label>
            <input
              type="text"
              onChange={e => setNamePlatfm(e.target.value)} 
              placeholder="Ps3, Ps4, Xbox, Snes ..." />
          </div>

          <p>Por favor, Indica el estado del juego y la caja, siendo 10 el máximo y 0 el mínimo.  </p>

          <div>
            <label>Estado juego</label>

            <select
              name="status-game"
              onChange={e => setStatusGame(e.target.value)}
              id="status-game"
            >
              <option value="0">0</option>
              <option value="1">1</option> 
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div>
            <label>Estado caja</label>

            <select
              name="status-box"
              onChange={e => setStatusBox(e.target.value)}
              id="status-box"
            >
              <option value="0">0</option>
              <option value="1">1</option> 
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <button onClick={createGame} className='btn'>Enter</button>

        </form>


      </WrapperContent>
      <Footer />
    </>
  );

}

export default InsertGame;
