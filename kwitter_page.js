//YOUR FIREBASE LINKS
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

    User_Name=localStorage.getItem("User_Name");
    room_name=localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         console.log(firebase_message_id);
         console.log(message_data)
         name = message_data['name'];
         message = message_data['message'];
         like = message_data['like'];
         name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
         message_with_tag = "<h4> class='message_h4'>" + message + "</h4>";
         like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
         span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

         row = name_with_tag + message_with_tag + like_button +span_with_tag;
         document.getElementById("output").innerhtml +=row;
//Start code
function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({

            name:User_Name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}
//End code
      } });  }); }
getData();

function updateLike(message_id){
      console.log("clicked on like button- "+message_id);
      button_id=message_id;
      likes=document.getElementById(button_id).value;
      updated_likes=Number(likes)+1;
      console.log(updated_likes);
      firebase.database().ref(room_name).child(message_id).update({
            like:updated_likes;
      });
}

function logout(){
      localStorage.removeItem("User_Name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
