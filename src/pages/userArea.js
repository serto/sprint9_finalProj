import { useState, useEffect } from 'react';

import Header from '../components/header/header';
import { WrapperColumn } from '../assets/styles/styles';
import Footer from '../components/footer/footer';
import { getAllGamesOfUser } from '../application/api';
import { Link } from 'react-router-dom';
import { GameBox } from '../components/gameBox/gameBox';

const UserArea = (_) => {

  const [nameUser, setNameUser] = useState(JSON.parse(localStorage.getItem("userChenjiName")));
  const [mailUser, setMailUser] = useState(JSON.parse(localStorage.getItem("userChenjiMail")));
  const [pswdUser, setPswdUser] = useState(JSON.parse(localStorage.getItem("userChenjiPassword")));

  const [games, setGames] = useState([]);

  useEffect(() => {
    const idUser = JSON.parse(localStorage.getItem("userChenjiId"));
    const games = getAllGamesOfUser(idUser);
    const gamesArray = [];
    
    games.then(res => {

      res.forEach((doc) => {
        gamesArray.push(doc.data());
      });
      
      setGames(gamesArray);

    }).catch(error => {
      console.log('error ', error);
    });


  }, []);

  return (
    <>
      <Header />
      <WrapperColumn>

        <h2 className="t-t2">Área Usuario</h2>
        <form>
          <p>Nombre usuario: <input type='text' value={nameUser} /></p>
          <p>Mail usuario: <input type='text' value={mailUser} /></p>
          <p>Password usuario: <input type='password' value={pswdUser} /></p>
          <button>Editar</button>
        </form>

        <div>

          <Link to="/insertGame" className="btn btn__big">Inserta un nuevo juego</Link>

          <h3>Tus juegos</h3>

          { games.map((game, key) => <GameBox key={key} game={game} /> )}

        </div>

      </WrapperColumn>
      <Footer />
    </>
  );

}

export default UserArea;
