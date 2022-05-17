let index = 0;
function findPassword() {
    let phone = $(`#phone`).val();
    let email = $(`#email`).val();
    $.ajax({
        type: 'GET',
        url: `http://localhost:8080/findUserId/${email}/${phone}`,
        success: function (data) {
          let content = `<button type="button" class="btn btn-success btn-block" onclick="changePassword(${data.id})">Xác nhận</button>`
            $(`#changePassword`).html(content)
            location.href='../../auth/changePassword.html'

        }, error: function () {
            showErrorMessage('Số điện thoại hoặc email không đúng!')
        }

    })

}

function changePassword(id) {
    let password = $(`#newPassword`).val();
    let confirmPassword = $(`#newConfirmPassword`).val();
    let changePassword = {
        password: password,
        confirmPassword: confirmPassword
    }
    $.ajax({
        type: 'POST',
        url: `http://localhost:8080/changePassword/${id}`,
        data: JSON.stringify(changePassword),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        success: function () {
            showSuccessMessage('Đổi mật khẩu thành công!')
        },
        error: function () {
            showErrorMessage("Mật khẩu nhập lại không đúng!")
        }
    })
}