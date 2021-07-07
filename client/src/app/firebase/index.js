import firebase from 'firebase/app';
import 'firebase/storage';
const firebaseConfig = {
    apiKey: "AIzaSyBn3Qgdeotyhwqvi3D_PzZBhXspA0HG1-s",
    authDomain: "crud-1054b.firebaseapp.com",
    databaseURL: "https://crud-1054b.firebaseio.com",
    projectId: "crud-1054b",
    storageBucket: "crud-1054b.appspot.com",
    messagingSenderId: "55050072470",
    appId: "1:55050072470:web:4d7f40717ad04c6f1f2db7",
    measurementId: "G-N0ZT91P3SV"
  };
  firebase.initializeApp(firebaseConfig);
  const storage = firebase.storage();
  export {storage, firebase as default};