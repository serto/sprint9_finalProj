
import firebase, { db } from './firebase';
import {collection, getDocs, getDoc, query, doc,  addDoc, deleteDoc, updateDoc} from "firebase/firestore";

// ALTA
export const createNewUser = async (nameUser, mail, password) => {
  return await addDoc(collection(db, 'users'), { nameUser, mail, password });
};



// ALTA
export const createNewGame = (nameGame, namePlatfm, statusGame, statusBox, idUser) => {

  addDoc(collection(db, 'games'), { nameGame, namePlatfm, statusGame, statusBox, idUser });
};