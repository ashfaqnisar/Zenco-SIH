import firebase from 'firebase'
// Initialize Firebase
let config = {
    apiKey: "AIzaSyC6MhugRQOBC4hXuYtfvA6_zZ22XGBDI30",
    authDomain: "zenco-project.firebaseapp.com",
    databaseURL: "https://zenco-project.firebaseio.com",
    projectId: "zenco-project",
    storageBucket: "zenco-project.appspot.com",
    messagingSenderId: "512650874407"
};
firebase.initializeApp(config);
export default firebase