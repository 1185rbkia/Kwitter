function Add_User(){
    User_Name=document.getElementById("User_Name").value;
    localStorage.setItem("User_Name",User_Name);
    window.location="kwitter_room.html";
}