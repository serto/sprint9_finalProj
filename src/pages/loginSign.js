import { useState, useContext } from 'react';

import { AppContext } from '../application/provider';

import { createNewUser } from '../application/api';

import Header from '../components/header/header';
import { WrapperContent } from '../assets/styles/styles';

const LoginSign = (_) => {

  const [state, setState] = useContext(AppContext);

  const [nameNewUser, setNameNewUser] = useState(null);
  const [nameNewUserMail, setNameNewUserMail] = useState(null);
  const [nameNewUserPasw, setNameNewUserPasw] = useState(null);
  const [newUserCreated, setNewUserCreatedN] = useState(0);

  const createNewUer = () => {
    const resultInNewUser = createNewUser(nameNewUser, nameNewUserMail, nameNewUserPasw);
    resultInNewUser.then(res => {
      console.log(res);
      localStorage.setItem('userChenjiLogged', JSON.stringify(true));
      localStorage.setItem('userChenjiMail', nameNewUserMail);
      setState(true);
    }).catch( error => {
      console.error(`error en la insercion`);
    });
  }


  return (
    <>
      <Header />
      <WrapperContent>

        <div className='boxFormSign'>
          <h2 className='t-t2'>Login</h2>
          <p>Entra en tu cuenta</p>
          <div>
            <label>Mail</label>
            <input type="mail" onChange={e => setNameNewUserMail(e.target.value)} placeholder="Mail" />
          </div>
          <div>
            <label>Password</label>
            <input type="password" onChange={e => setNameNewUserPasw(e.target.value)} placeholder="Password" />
          </div>
          <button className='btn'>Entrar</button>
        </div>

        <div className='boxFormSign'>
          <h2 className='t-t2'>Registrate</h2>
          <p>Registrate para poder intercambiar videojuegos !</p>
          <div>
            <label>Nombre de usuario</label>
            <input type="text" onChange={e => setNameNewUser(e.target.value)} placeholder="Nombre" />
          </div>
          <div>
            <label>Mail</label>
            <input type="mail" onChange={e => setNameNewUserMail(e.target.value)} placeholder="Mail" />
          </div>
          <div>
            <label>Password</label>
            <input type="password" onChange={e => setNameNewUserPasw(e.target.value)} placeholder="Password" />
          </div>
          
          <button onClick={createNewUer} className='btn'>New user</button>
        </div>

      </WrapperContent>
    </>
  );

}

export default LoginSign;
