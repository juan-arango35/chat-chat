/* aqui colocamos el codigo que nos da firestore del regitro de la pagina:  */

import firebase from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyDuy5nQfrlNKDLj5iAqbioxe7GZavUxgU8",
    authDomain: "chat-287f7.firebaseapp.com",
    databaseURL: "https://chat-287f7-default-rtdb.firebaseio.com",
    projectId: "chat-287f7",
    storageBucket: "chat-287f7.appspot.com",
    messagingSenderId: "895887335346",
    appId: "1:895887335346:web:e03744dbe1c52b5ec90eab"
  };

  export default  app = initializeApp(firebaseConfig);