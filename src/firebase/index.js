import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyCjlF_QEwMUqI2edFPacE4BUmGXJLSlPaQ',
  authDomain: 'whatsapp-v2o.firebaseapp.com',
  databaseURL: 'https://whatsapp-v2o.firebaseio.com',
  projectId: 'whatsapp-v2o',
  storageBucket: 'whatsapp-v2o.appspot.com',
  messagingSenderId: '975150299639',
  appId: '1:975150299639:web:d3d003c0019be120df16f2',
  measurementId: 'G-B4G1PK78LL',
};
firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firestore;
