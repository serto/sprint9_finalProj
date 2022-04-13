
import firebase, { db } from './firebase';
import {collection, getDocs, getDoc, query, where, doc,  addDoc, deleteDoc, updateDoc} from "firebase/firestore";
import { getStorage, ref, uploadBytes } from "firebase/storage";

// ALTA
export const createNewUser = async (nameUser, mail, password) => {
  return await addDoc(collection(db, 'users'), { nameUser, mail, password });
};

//COMPROVAR USUARIO
export const LoginUser = async (mail, password) => {
  const consUser = query(collection(db, 'users'), where("mail", "==", mail), where("password", "==", password));
  return await getDocs(consUser);
};


//COMPROVAR USUARIO
export const updateUser = async (id, nameUser, mail, password) => {
  return await updateDoc(doc(db, 'users', id), { nameUser, mail, password } );
};


//TODOS LOS JUEGOS DE UN USUARIO
export const getAllGamesOfUser = async (idUser) => {
  const gamesUser = query(collection(db, 'games'), where("idUser", "==", idUser));
  return await getDocs(gamesUser);
};



// NEW GAME
export const createNewGame = async (nameGame, namePlatfm, statusGame, statusBox, idUser, gamesToChange, imageGame) => {

  /* // Create a root reference
  const storage = getStorage();
  // Create a reference to 'images/mountains.jpg'
  const mountainImagesRef = ref(storage, imageGame);
  console.log('oli');

  const bytes = new Uint8Array([0x48, 0x65, 0x6c, 0x6c, 0x6f, 0x2c, 0x20, 0x77, 0x6f, 0x72, 0x6c, 0x64, 0x21]);
  uploadBytes(mountainImagesRef, bytes).then((snapshot) => {
    console.log('Uploaded an array!');
  });

  */

  //return true;
  return await addDoc(collection(db, 'games'), { nameGame, namePlatfm, statusGame, statusBox, idUser, gamesToChange });
};

// ELIMINAR JUEGO
export const deleteGameUser = async (idGame) => {
  await deleteDoc(doc(db, 'games', idGame));
};

//TODOS LOS JUEGOS DE UN USUARIO
export const getGameFromBBDD = async (name) => {
  const arrayToSearch = [name];
  //console.log(arrayToSearch);
  const games = query(collection(db, 'games'), where("nameGame", '==' , name));
  return await getDocs(games);
};
