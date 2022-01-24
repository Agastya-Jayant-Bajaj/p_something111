const config = {
      apiKey: "AIzaSyCqb2nWpNdl_YJGvErinkDAfRGXKXDAiC0",
      authDomain: "class93-32d32.firebaseapp.com",
      projectId: "class93-32d32",
      storageBucket: "class93-32d32.appspot.com",
      messagingSenderId: "526768581560",
      appId: "1:526768581560:web:2fdbfb061e6a4541587d4d"
    };
    
    // Initialize Firebase
    firebase.initializeApp(config);
    
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML="welcome"+ user_name+"!";
 
function addRoom() {
  Room_names = document.getElementById("Room_names").value
  firebase.database().ref("/").child(user_name).update({
    purpose : "adding room name"
}
  )
  localStorage.setItem("Room_name",Room_names)
  window.location="twitter_page.html"
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
console.log("room_name ="+ Room_names);
row ="<div class='room_name' id="+Room_names+" onclick='redirectToroomName(this.id)'>#"+Room_names+"</div><hr>"
document.getElementById("output").innerHTML+=row
    //End code
    });});}
getData();

 function redirectToroomName(name) {
   console.log(name);
   localStorage.setItem("room_name", name)
   window.location="kwitter_page.html"
 }

 function logout_user() {
   localStorage.removeItem("user_name");
   localStorage.removeItem("room_name");
   window.location = "kwitter_page.html";
 }

