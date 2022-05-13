function login() {
    let username = $(`#username`).val();
    let password = $(`#password`).val();

    let user = {
        username : username,
        password : password
    }
    $.ajax({
        type : 'POST',
        url : `http://localhost:8080/login`,
        data : JSON.stringify(user),
        headers : {
            'Accept' : 'application/json',
            'Content-Type' : 'application/json'
        },
        success :  function (currentUser) {
            localStorage.setItem("currentUser", JSON.stringify(currentUser))
            location.href='./hello.html'
        },
        error : function () {
            showErrorMessage("Your account or your password doesn't match!")
        }
    })
}