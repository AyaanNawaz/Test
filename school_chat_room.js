var firebaseConfig = {
    apiKey: "AIzaSyBD-L_HBQirGTI31RISG79sa3eohfyiseQ",
    authDomain: "micro-school-chat-web.firebaseapp.com",
    projectId: "micro-school-chat-web",
    storageBucket: "micro-school-chat-web.appspot.com",
    messagingSenderId: "354114092013",
    appId: "1:354114092013:web:49f2bd13f261c66b3545e4",
    measurementId: "G-KLQ543CTEZ"
  };

firebase.initializeApp(firebaseConfig);


user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";


function logOut(){
    window.location="index.html"
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    }
   
