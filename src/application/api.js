
import firebase, { db } from './firebase';
import {collection, getDocs, getDoc, query, where, doc,  addDoc, deleteDoc, updateDoc} from "firebase/firestore";
import { async } from '@firebase/util';

// ALTA
export const createNewUser = async (nameUser, mail, password) => {
  return await addDoc(collection(db, 'users'), { nameUser, mail, password });
};

//COMPROVAR USUARIO
export const LoginUser = async (mail, password) => {
  const consUser = query(collection(db, 'users'), where("mail", "==", mail), where("password", "==", password));
  return await getDocs(consUser);
};

//TODOS LOS JUEGOS DE UN USUARIO
export const getAllGamesOfUser = async (idUser) => {
  const gamesUser = query(collection(db, 'games'), where("idUser", "==", idUser));
  return await getDocs(gamesUser);
};

// NEW GAME
export const createNewGame = (nameGame, namePlatfm, statusGame, statusBox, idUser) => {

  addDoc(collection(db, 'games'), { nameGame, namePlatfm, statusGame, statusBox, idUser });
};