
var firebaseConfig = {
      apiKey: "AIzaSyAzItnKYXpjJGaXqBPt61uf38hFjC2dyac",
      authDomain: "class-test-74409.firebaseapp.com",
      databaseURL: "https://class-test-74409-default-rtdb.firebaseio.com",
      projectId: "class-test-74409",
      storageBucket: "class-test-74409.appspot.com",
      messagingSenderId: "1049506095827",
      appId: "1:1049506095827:web:bd554689ee5a676f02aa26"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    User_Name=localStorage.getItem(User_Name);
    document.getElementById("User_Name").innerHTML="Welcome "+User_Name+" !";
    
    
    function Add_Room(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"Adding user"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("room name- "+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
      document.getElementById("output").innerHTML+=row;


      
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("User_Name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}