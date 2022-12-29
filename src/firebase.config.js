import {getApp, getApps, initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyBVATsxRIZM8JJQ-zTkiPYmFWTw-0dnqvo",
    authDomain: "deliveryapp-2842d.firebaseapp.com",
    databaseURL: "https://deliveryapp-2842d-default-rtdb.firebaseio.com",
    projectId: "deliveryapp-2842d",
    storageBucket: "deliveryapp-2842d.appspot.com",
    messagingSenderId: "114650912821",
    appId: "1:114650912821:web:493f8f16e4e21f649a797c"
  };

  const app = getApps.length>0 ? getApp() : initializeApp(firebaseConfig)

  const firestore = getFirestore(app)
  const storage =getStorage(app)

  export { app, firestore, storage}