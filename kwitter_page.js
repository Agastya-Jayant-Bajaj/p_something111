//YOUR FIREBASE LINKS
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

   user_name=localStorage.getItem("user_name")
   room_name=localStorage.getItem("room_name")

   function send(){
      msg = document.getElementById("msg").value
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data['name']
message=message_data['message']
like=message_data['like']
name_with_tag="<h4>"+name+"<img class='user_tick' src='tick.png'></h4>"
message_with_tag="<h4 class='message_h4'>"+message+"</h4>"
like_button=" <button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updatelike(this.id)'>"
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'> like:"+like+"</span></button><h4>"
row=name_with_tag+message_with_tag+like_button+span_with_tag
document.getElementById("output").innerHTML+=row
//End code
      } });  }); }
getData();



