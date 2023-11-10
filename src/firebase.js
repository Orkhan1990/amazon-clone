import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDWko3GmVQQ4EhoXvqZMCC6sI_H01rmum4",
    authDomain: "apazone-clone.firebaseapp.com",
    projectId: "apazone-clone",
    storageBucket: "apazone-clone.appspot.com",
    messagingSenderId: "581246901274",
    appId: "1:581246901274:web:0f5a0da95fd0d598f885a3",
    measurementId: "G-RJZP6TTM1H"
  };


  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();

  export {db,auth};