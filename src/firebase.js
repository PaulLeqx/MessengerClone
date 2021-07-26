import firebase from 'firebase/app';
import "firebase/auth";

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyCjSvCZuLAqb0WVdRRsaNzFrMvJVVFEhdU",
  authDomain: "messengerclone-ce0a0.firebaseapp.com",
  projectId: "messengerclone-ce0a0",
  storageBucket: "messengerclone-ce0a0.appspot.com",
  messagingSenderId: "436930164087",
  appId: "1:436930164087:web:1d8d3646fe17f7c9189d72"
}).auth();