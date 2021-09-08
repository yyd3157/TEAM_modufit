
document.addEventListener("DOMContentLoaded", function(){
    var userInfo = {
            name: 'admin',
            id: 'admin',
            pw1: 'admin',
            rank: 0
        }

    localStorage.setItem("__user__admin", JSON.stringify(userInfo));
});


function goLogin(){
    location.href="login.html";
}