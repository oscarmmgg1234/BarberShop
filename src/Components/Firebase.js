import firebase from "firebase";

const config = {
    apiKey: "AIzaSyBrmFjEGHGpS4Jrty6Z-TsQKJPI4NY2XQg",
    authDomain: "barberauth-3f78c.firebaseapp.com",
    databaseURL: "https://barberauth-3f78c.firebaseio.com",
    projectId: "barberauth-3f78c",
    storageBucket: "barberauth-3f78c.appspot.com",
    messagingSenderId: "49618119082",
    appId: "1:49618119082:web:c10cb07623955c1b5c63d3",
    measurementId: "G-Z669D93RPD"
}
const Firebase = firebase.initializeApp(config);
export default Firebase;