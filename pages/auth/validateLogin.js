$(document).ready(function () {
    $('#loginForm').validate({
        rules: {
            username: {
                required: true,
            },
            password: {
                required: true,
            },
        },
        messages: {
            username: {
                required: "Hãy nhập tên tài khoản!",
            },
            password: {
                required: "Hãy nhập mật khẩu!",
                // required: "Mật khẩu phải ít nhất 6 ký tự gồm 1 số và chữ cái"
            },
        },
        errorElement: 'span',
        errorPlacement: function (error, element) {
            error.addClass('invalid-feedback');
            element.closest('.form-group').append(error);
        },
        highlight: function (element, errorClass, validClass) {
            $(element).addClass('is-invalid');
        },
        unhighlight: function (element, errorClass, validClass) {
            $(element).removeClass('is-invalid');
        }
    });
    $("#login").click(function () {
        if ($("#loginForm").valid()) {
            login();
        }
    });
});