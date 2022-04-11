import { useState, useContext } from 'react';

import { AppContext } from '../application/provider';
import { useNavigate } from "react-router-dom";
import { createNewUser, LoginUser } from '../application/api';

import Header from '../components/header/header';
import { WrapperContent } from '../assets/styles/styles';
import Footer from '../components/footer/footer';
import { ErrorMessage } from '../components/errorsMessage/errorsMessage.style';

const LoginSign = (_) => {

  const [state, setState] = useContext(AppContext);

  const [newUserName, setnewUserName] = useState(null);
  const [newUserMail, setNewUserMail] = useState(null);
  const [newUserPasw, setNewUserPasw] = useState(null);
  const [newUserCreated, setNewUserCreatedN] = useState(0);
  const [nameUserMail, setNameUserMail] = useState(null);
  const [nameUserPasw, setNameUserPasw] = useState(null);
  const [userLogged, setUserLogged] = useState(false);
  const [errorLoggin, setErrorLoggin] = useState(false);
  const navigate = useNavigate();

  const createNewUer = () => {
    const resultInNewUser = createNewUser(newUserName, newUserMail, newUserPasw);
    resultInNewUser.then(res => {
      //console.log(res);
      localStorage.setItem('userChenjiLogged', JSON.stringify(true));
      setState(true);

      navigate(process.env.PUBLIC_URL + '/userArea');
      console.log('user created');
    }).catch( error => {
      console.error(`error en la insercion`);
    });
  }

  const loginUserSite = () => {
    //console.log(nameUserMail);
    //console.log(nameUserPasw);
    const userInBBDD = LoginUser(nameUserMail, nameUserPasw);

    userInBBDD.then(res => {

      let resultExist = 0;

      res.forEach((doc) => {
        resultExist = 1;
        const userInfo = doc.data();
        
        localStorage.setItem('userChenjiLogged', JSON.stringify(true));
        localStorage.setItem('userChenjiId', JSON.stringify(doc.id));
        localStorage.setItem('userChenjiMail', JSON.stringify(userInfo.mail));
        localStorage.setItem('userChenjiName', JSON.stringify(userInfo.nameUser));
        localStorage.setItem('userChenjiPassword', JSON.stringify(userInfo.password));
        setUserLogged(true);
        setState(true);
        setErrorLoggin(false);

        navigate(process.env.PUBLIC_URL + '/userArea');

      });

      if (resultExist === 0) {//mail o password incorrectos 
        setErrorLoggin(true);
      }
    }).catch(error => {
      console.log('error ', error);
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
            <input type="mail" onChange={e => setNameUserMail(e.target.value)} placeholder="Mail" />
          </div>
          <div>
            <label>Password</label>
            <input type="password" onChange={e => setNameUserPasw(e.target.value)} placeholder="Password" />
          </div>
          <button onClick={loginUserSite} className='btn'>Entrar</button>

          <ErrorMessage showMessage={errorLoggin}>Mail o password incorrectos</ErrorMessage>
        </div>

        <div className='boxFormSign'>
          <h2 className='t-t2'>Registrate</h2>
          <p>Registrate para poder intercambiar videojuegos !</p>
          <div>
            <label>Nombre de usuario</label>
            <input type="text" onChange={e => setnewUserName(e.target.value)} placeholder="Nombre" />
          </div>
          <div>
            <label>Mail</label>
            <input type="mail" onChange={e => setNewUserMail(e.target.value)} placeholder="Mail" />
          </div>
          <div>
            <label>Password</label>
            <input type="password" onChange={e => setNewUserPasw(e.target.value)} placeholder="Password" />
          </div>
          
          <button onClick={createNewUer} className='btn'>New user</button>
        </div>

      </WrapperContent>
      <Footer />
    </>
  );

}

export default LoginSign;
