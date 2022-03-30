import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: 'AIzaSyDOplxLXp4T1Q6LGa9R8Fnj21kLyiUCT-Q',
    authDomain: 'sprint9-itacd.firebaseapp.com',
    projectId: 'sprint9-itacd',
    storageBucket: "sprint9-itacd.appspot.com",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export default app;