let currentUser = JSON.parse(localStorage.getItem("currentUser")) ;

$(document).ready(function () {
    if (currentUser == null) {
        location.href = '/module4-casestudy-frontend/pages/auth/login.html';
    }
});
function signOut() {
    window.localStorage.clear();
    location.href = '/module4-casestudy-frontend/pages/auth/login.html';
}
