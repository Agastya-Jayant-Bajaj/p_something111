
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyCqb2nWpNdl_YJGvErinkDAfRGXKXDAiC0",
    authDomain: "class93-32d32.firebaseapp.com",
    databaseURL: "https://class93-32d32-default-rtdb.firebaseio.com",
    projectId: "class93-32d32",
    storageBucket: "class93-32d32.appspot.com",
    messagingSenderId: "526768581560",
    appId: "1:526768581560:web:2fdbfb061e6a4541587d4d"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

  function Adduser() {
      user_name =document.getElementById("user_name").value
firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
})

  }