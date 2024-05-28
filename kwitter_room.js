
var firebaseConfig = {
  apiKey: "AIzaSyDWvVkYHfQtlSHfqG5kagnmTJjGolPgDNk",
  authDomain: "kwitter-6ecaa.firebaseapp.com",
  databaseURL: "https://kwitter-6ecaa-default-rtdb.firebaseio.com",
  projectId: "kwitter-6ecaa",
  storageBucket: "kwitter-6ecaa.appspot.com",
  messagingSenderId: "61604861993",
  appId: "1:61604861993:web:8fd492dbb2d88290672438"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = " Welcome " + user_name + "!";

function addRoom()

{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_Names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}