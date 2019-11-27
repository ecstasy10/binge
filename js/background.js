var friends = document.getElementById("friends-nav")
const new_session = document.getElementById("new-session-nav")
const sessions = document.getElementById("sessions-nav")
const profile = document.getElementById("profile-nav")
var bool = true

friends.addEventListener('click', () => {
    //alert("si");
    var fbox = document.getElementById("friends-box")
    if (bool == true){
        fbox.style.gridColumn = "3 / 11"
        fbox.style.gridRow = "2 / 6"
        fbox.style.zIndex = "2"
        bool = false
    }
    else{
        fbox.style.gridColumn = "3 / 5"
        fbox.style.gridRow = "2 / 4"
        fbox.style.zIndex = "0"
        bool = true
    }
});

sessions.addEventListener('click', () => {
    //alert("si");
    var slbox = document.getElementById("sessions-list-box")
    if (bool == true) {
        slbox.style.gridColumn = "3 / 11"
        slbox.style.gridRow = "2 / 6"
        slbox.style.zIndex = "2"
        bool = false
    } else {
        slbox.style.gridColumn = "5 / 11"
        slbox.style.gridRow = "2 / 6"
        slbox.style.zIndex = "0"
        bool = true
    }
});

profile.addEventListener('click', () => {
    //alert("si");
    var pbox = document.getElementById("profile-box")
    if (pbox.style.display === "none") {
        pbox.style.display = ""
        pbox.style.gridColumn = "3 / 11"
        pbox.style.gridRow = "2 / 6"
        pbox.style.zIndex = "0"
        bool = false
    } else {
        pbox.style.display = "none";
        bool = true
    }
});
