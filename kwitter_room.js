var firebaseConfig = {
    apiKey: "AIzaSyANUEujwtyrVNUUahaP2nHutgJiWcPFpAM",
    authDomain: "kwitter-project-update-50372.firebaseapp.com",
    databaseURL: "https://kwitter-project-update-50372-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-update-50372",
    storageBucket: "kwitter-project-update-50372.appspot.com",
    messagingSenderId: "44819131699",
    appId: "1:44819131699:web:28969da8f70e2a8a84e246",
    measurementId: "G-3MCGCFG9VK"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);



user_name = localStorage.getItem("user_name");
document.getElementById("text_username").innerHTML = "Welcome " + user_name +"!";

function add_room() {

      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room name" , room_name);

      window.location= "kwitter_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;  

      //End code
      });});}
getData();

function redirectToRoomName(name) {

      console.log(room_name);
      localStorage.setItem("room name" , room_name);
      window.location= "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("room name" , room_name);
      localStorage.removeItem("username" , user_name);
      window.location= "index.html";

}

