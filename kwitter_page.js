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

 

   room_name = localStorage.getItem("room name");
   user_name = localStorage.getItem("user_name");

function send() {
      msg = document.getElementById("msg").value;

      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
           
      });

      document.getElementById("msg").value = "";
    }