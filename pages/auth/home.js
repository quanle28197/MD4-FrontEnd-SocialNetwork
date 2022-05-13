let currentUser = JSON.parse(localStorage.getItem("currentUser")) ;

$(document).ready(function () {
    if (currentUser == null) {
        location.href = '/login.html';
    }
});
function logOut() {
    window.localStorage.clear();
    location.href = '/login.html';
}