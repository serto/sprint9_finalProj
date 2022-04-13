import { useState } from 'react';
import { createNewGame } from '../application/api';

import Header from '../components/header/header';
import { WrapperContent } from '../assets/styles/styles';
import Footer from '../components/footer/footer';
import { OkMessage } from '../components/oksMessage/oksMessage.style';

import { ErrorMessage } from '../components/errorsMessage/errorsMessage.style';

const InsertGame = (_) => {


  const [nameGame, setNameGame] = useState('');
  const [namePlatfm, setNamePlatfm] = useState('');
  const [statusGame, setStatusGame] = useState(0);
  const [statusBox, setStatusBox] = useState(0);
  const [gamesToChange, setGamesToChange] = useState('');
  const [imageGame, setImageGame] = useState('aa');
  const [viewMessage, setViewMessage] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);

  const [idUser, setIdUser] = useState(JSON.parse(localStorage.getItem("userChenjiId")));

  const changeImagen = (e) => {
    setImageGame(e.target.files[0]);
    console.log(imageGame);
  }

  const createGame = (event) => {
    event.preventDefault();
    //console.log(imageGame);
    
    const newGame = createNewGame(nameGame, namePlatfm, statusGame, statusBox, idUser, gamesToChange, imageGame);


    if ( nameGame !=='' && namePlatfm !== '' && gamesToChange !== '' ) {
 
      newGame.then(res => {
        setNameGame('');
        setNamePlatfm('');
        setStatusGame(0);
        setStatusBox(0);
        setGamesToChange('');
        setViewMessage(true);
        setTimeout(() => {setViewMessage(false);}, 3000);
      }).catch( error => {
        console.error(`error en l inserccio`);
      });
      setErrorMsg(false);

    } else {
      setErrorMsg(true);
    }



  }

  return (
    <>
      <Header />
      <WrapperContent>

        <form>

          <h2 className='t-t2'>Inserta tu juego para intercambiar</h2>

          <OkMessage viewMessage={viewMessage}>Juego insertado correctamente</OkMessage>
          <ErrorMessage showMessage={errorMsg}>Todos los campos són obligatorios</ErrorMessage>

          <div>
            <label>Subir una imagen:</label>
            <input type="file" name="imagen" onChange={changeImagen} />
          </div>

          <div>
            <label>Nombre del juego</label>
            <input
              type="text"
              onChange={e => setNameGame(e.target.value)}
              value={nameGame}
              placeholder="God of War, FIFA 20, Uncharted ..." />
          </div>

          <div>
            <label>Plataforma</label>
            <input
              type="text"
              onChange={e => setNamePlatfm(e.target.value)} 
              value={namePlatfm}
              placeholder="Ps3, Ps4, Xbox, Snes ..." />
          </div>

          <div>
            <label>Se cambia por:</label>

            <input
              type="text"
              placeholder="FIFA 21, Tomb Raider ...."
              onChange={e => setGamesToChange(e.target.value)}
              value={gamesToChange}
            />

          </div>

          <p>Por favor, Indica el estado del juego y la caja, siendo 10 el máximo y 0 el mínimo.  </p>

          <div>
            <label>Estado juego</label>

            <select
              name="status-game"
              onChange={e => setStatusGame(e.target.value)}
              id="status-game"
              value={statusGame}
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
              value={statusBox}
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

          <br /> <br />
          <button onClick={createGame} className='btn'>Nuevo juego</button>

        </form>


      </WrapperContent>
      <Footer />
    </>
  );

}

export default InsertGame;
