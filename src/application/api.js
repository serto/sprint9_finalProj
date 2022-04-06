
import firebase, { db } from './firebase';
import {collection, getDocs, getDoc, query, where, doc,  addDoc, deleteDoc, updateDoc} from "firebase/firestore";

// ALTA
export const createNewUser = async (nameUser, mail, password) => {
  return await addDoc(collection(db, 'users'), { nameUser, mail, password });
};

//COMPROVAR USUARIO
export const LoginUser = async (mail, password) => {
  const consUser = query(collection(db, 'users'), where("mail", "==", mail), where("password", "==", password));
  return await getDocs(consUser);
};



// NEW GAME
export const createNewGame = (nameGame, namePlatfm, statusGame, statusBox, idUser) => {

  addDoc(collection(db, 'games'), { nameGame, namePlatfm, statusGame, statusBox, idUser });
};