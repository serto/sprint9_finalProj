import { useState, useContext } from 'react';

import { AppContext } from '../application/provider';
import { useNavigate } from "react-router-dom";
import { createNewUser, LoginUser } from '../application/api';

import Header from '../components/header/header';
import { WrapperContent } from '../assets/styles/styles';
import Footer from '../components/footer/footer';
import { ErrorMessage } from '../components/errorsMessage/errorsMessage.style';


const validMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var alphanum = /^[0-9a-zA-Z]+$/;

const LoginSign = (_) => {

  const [state, setState] = useContext(AppContext);

  const [newUserName, setnewUserName] = useState('');
  const [newUserMail, setNewUserMail] = useState('');
  const [newUserPasw, setNewUserPasw] = useState('');
  const [newUserNameError, setnewUserNameError] = useState(false);
  const [newUserMailError, setNewUserMailError] = useState(false);
  const [newUserPaswError, setNewUserPaswError] = useState(false);
  const [newUserCreated, setNewUserCreatedN] = useState(0);
  const [nameUserMail, setNameUserMail] = useState(null);
  const [nameUserPasw, setNameUserPasw] = useState(null);
  const [userLogged, setUserLogged] = useState(false);
  const [errorLoggin, setErrorLoggin] = useState(false);
  const navigate = useNavigate();

  const createNewUer = () => {

    let noErrors = true;
  
    if (newUserName != null) {
        noErrors = false;
        setnewUserNameError(true);
    } else {
      noErrors = true;
      setnewUserNameError(false);
    }

    //validate email
    var mail_validate = newUserMail.match(validMail);
    if ((mail_validate == null) || (newUserMail.length < 1)) {
        noErrors = false;
        setNewUserMailError(true);
    } else {
      noErrors = true;
      setNewUserMailError(false);
    }

    //validate password
    var passwd_validate = newUserPasw.match(alphanum);
    if ((passwd_validate == null) || (newUserPasw <= 2)) {
        noErrors = false;
        setNewUserPaswError(true);
    } else {
      noErrors = true;
      setNewUserPaswError(false);
    }

    console.log('no errors : ', noErrors);


    if(noErrors === true) {
      const resultInNewUser = createNewUser(newUserName, newUserMail, newUserPasw);
      resultInNewUser.then(res => {
        console.log(res);
        console.log(res.doc);
        localStorage.setItem('userChenjiLogged', JSON.stringify(true));
        localStorage.setItem('userChenjiName', JSON.stringify(newUserName));
        localStorage.setItem('userChenjiMail', JSON.stringify(newUserMail));
        localStorage.setItem('userChenjiPassword', JSON.stringify(newUserPasw));
        setState(true);
        navigate(process.env.PUBLIC_URL + '/userArea');
        console.log('user created');
        noErrors = true;
      }).catch( error => {
        console.error(`error en la insercion`);
      });
    }

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
            <ErrorMessage showMessage={newUserNameError}>Mínimo de 3 carácteres</ErrorMessage>
          </div>
          <div>
            <label>Mail</label>
            <input type="mail" onChange={e => setNewUserMail(e.target.value)} placeholder="Mail" />
            <ErrorMessage showMessage={newUserMailError}>Mail incorrectos</ErrorMessage>
          </div>
          <div>
            <label>Password</label>
            <input type="password" onChange={e => setNewUserPasw(e.target.value)} placeholder="Password" />
            <ErrorMessage showMessage={newUserPaswError}>Ha de contener números y letras</ErrorMessage>
          </div>
          
          <button onClick={createNewUer} className='btn'>New user</button>
        </div>

      </WrapperContent>
      <Footer />
    </>
  );

}

export default LoginSign;
