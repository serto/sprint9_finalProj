import { useState, useEffect } from 'react';

import Header from '../components/header/header';
import { WrapperColumn } from '../assets/styles/styles';
import Footer from '../components/footer/footer';
import { getAllGamesOfUser, updateUser, LoginUser } from '../application/api';
import { Link } from 'react-router-dom';
import GameBox from '../components/gameBox/gameBox';
import { OkMessage } from '../components/oksMessage/oksMessage.style';

const UserArea = (_) => {

  const [nameUser, setNameUser] = useState(JSON.parse(localStorage.getItem("userChenjiName")));
  const [mailUser, setMailUser] = useState(JSON.parse(localStorage.getItem("userChenjiMail")));
  const [pswdUser, setPswdUser] = useState(JSON.parse(localStorage.getItem("userChenjiPassword")));
  const [idUser, setIdUser] = useState(JSON.parse(localStorage.getItem("userChenjiId")));
  const [gameDeleted, setGameDeleted] = useState(0);

  const [games, setGames] = useState([]);
  const [viewMessage, setViewMessage] = useState(false);

  const getAllGames = () => {
    const idUser = JSON.parse(localStorage.getItem("userChenjiId"));
    const games = getAllGamesOfUser(idUser);
    const gamesArray = [];
    
    games.then(res => {

      res.forEach((doc) => {
        const obj = {
          id: doc.id,
          game: doc.data()
        }
        gamesArray.push(obj);
      });
      setGames(gamesArray);

    }).catch(error => {
      console.log('error ', error);
    });
  }


  useEffect(() => {

    if(idUser=== null) {

      const userInBBDD = LoginUser(mailUser, pswdUser);

      userInBBDD.then(res => {
        res.forEach((doc) => {
          setIdUser(doc.id);
          localStorage.setItem('userChenjiId', JSON.stringify(doc.id));
        })
      });
    }
  }, []);

  useEffect(() => {

    getAllGames();

  }, []);


  const editUser = (e) => {
    e.preventDefault();

    const updateUserChenji = updateUser(idUser, nameUser, mailUser, pswdUser);
    
    updateUserChenji.then(res => {
      localStorage.setItem('userChenjiMail', JSON.stringify(mailUser));
      localStorage.setItem('userChenjiName', JSON.stringify(nameUser));
      localStorage.setItem('userChenjiPassword', JSON.stringify(pswdUser));
      setViewMessage(true);
      setTimeout(() => {setViewMessage(false);}, 3000);
    }).catch( error => {
      console.error(`error en l actualitzacio`);
    });

  }

  const updateListGames = () => {
    getAllGames();
  }

  return (
    <>
      <Header />
      <WrapperColumn>

        <h2 className="t-t2">Área Usuario</h2>

        <OkMessage viewMessage={viewMessage}>Usuario editado correctamente</OkMessage>

        <form className='boxForm'>
          <div>
            <label>Nombre usuario: </label>
            <input type='text' value={nameUser} onChange={e => setNameUser(e.target.value)} />
          </div>
          <div>
            <label>Mail usuario: </label>
            <input type='text' value={mailUser} onChange={e => setMailUser(e.target.value)} />
          </div>
          <div>
            <label>Password usuario: </label>
            <input type='password' value={pswdUser} onChange={e => setPswdUser(e.target.value)}/>
          </div>
          
          <button onClick={editUser} className="btn">Editar</button>
        </form>

        <br /><br />
        <div>

          <h3>Tus juegos</h3>

          <Link to="/insertGame" className="btn btn__big">Inserta un nuevo juego</Link>

          <br /><br />

          { games.map((game, key) => <GameBox key={key} game={game} type="row" funct={updateListGames} /> )}

        </div>

      </WrapperColumn>
      <Footer />
    </>
  );

}

export default UserArea;
