function registerAccount() {

    let username = $(`#register_username`).val();
    let password = $(`#register_password`).val();
    let confirmPassword = $(`#register_confirm-password`).val();
    let fullName = $(`#register_fullName`).val();
    let email = $(`#register_email`).val();
    let phoneNumber = $(`#register_phoneNumber`).val();
    let dateOfBirth = $(`#register_dateOfBirth`).val();
    let address = $(`#register_address`).val();

    let user = {
        username: username,
        password: password,
        confirmPassword: confirmPassword,
        fullName : fullName,
        email : email,
        phoneNumber : phoneNumber,
        dateOfBirth : dateOfBirth,
        address : address
    };
    $.ajax({
        type: 'POST',
        url: `http://localhost:8080/register`,
        data : JSON.stringify(user),
        headers : {
            'Accept' : 'application/json',
            'Content-Type' : 'application/json'
        },
        success : function () {
            showSuccessMessage('Đăng ký thành công!')
            $(`#registerForm`).resetForm();
        },
        error : function () {
            showErrorMessage('Đăng ký thất bại!')
        }


    })
}
