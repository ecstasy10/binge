var friends = document.getElementById("friends-nav")
const new_session = document.getElementById("new-session-nav")
const sessions = document.getElementById("sessions-nav")
const profile = document.getElementById("profile-nav")
var bool = true

var x = window.matchMedia("(min-width: 1000px)")
myFunction(x)
x.addListener(myFunction) 

function myFunction(x) {
    var fbox = document.getElementById("friends-box")
    var slbox = document.getElementById("sessions-list-box")
    var pbox = document.getElementById("profile-box")
    fbox.style.width = '8.15em'
    if (x.matches) { 
       console.log("Mayor QUE 1000");
       friends.addEventListener('click', () => {
           if (bool == true) {
               fbox.style.width = "40em"
               fbox.style.height = ""
               fbox.style.zIndex = "5"
               bool = false
           } else {
               fbox.style.zIndex = "0"
               fbox.style.width = '8.15em'
               bool = true
           }
       });

       sessions.addEventListener('click', () => {
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
       })
    } else {
        /* ######################################## MAS PEQUEÑO ################################ */
        console.log("es mas pequeño")
        window.onresize = function (event) {
            document.location.reload(true)
        };
        friends.addEventListener('click', () => {
            if (bool == true) {
                fbox.style.gridColumn = "3 / 11"
                fbox.style.gridRow = "2 / 9"
                fbox.style.zIndex = "2"
                bool = false
            } else {
                fbox.style.gridColumn = "3 / 11"
                fbox.style.gridRow = "2 / 4"
                fbox.style.zIndex = "0"
                bool = true
            }
        });

        sessions.addEventListener('click', () => {
            if (bool == true) {
                slbox.style.gridColumn = "3 / 11"
                slbox.style.gridRow = "2 / 9"
                slbox.style.zIndex = "2"
                bool = false
            } else {
                slbox.style.gridColumn = "3 / 11"
                slbox.style.gridRow = "4 / 7"
                slbox.style.zIndex = "0"
                bool = true
            }
        });

        profile.addEventListener('click', () => {
            if (pbox.style.display === "none") {
                pbox.style.display = ""
                pbox.style.gridColumn = "3 / 11"
                pbox.style.gridRow = "2 / 9"
                pbox.style.zIndex = "0"
                bool = false
            } else {
                pbox.style.display = "none";
                bool = true
            }
        })
    }
}
    
