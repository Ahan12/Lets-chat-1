function addUser() {
    username = document.getElementById("user_name").value;
    localStorage.setItem("user_name", username);
    window.location = "Lets chat_room.html";
}