$(document).ready(function() {

    $('#register_username').on('input', function() {
        var input=$(this);
        var is_name=input.val();
        if(is_name){input.removeClass("invalid").addClass("valid");
            $('#error_username').removeClass("error_show").addClass("error");}

        else{input.removeClass("valid").addClass("invalid");
            $('#error_username').removeClass("error").addClass("error_show");
        }
    });

    $('#register_password').on('input',function (){
        var input=$(this);
        var is_name=input.val();
        if(is_name && (is_name.length>=6)&&(is_name.length <= 8)){input.removeClass("invalid").addClass("valid");
            $('#error_password').removeClass("error_show").addClass("error");}
        else{input.removeClass("valid").addClass("invalid");
            $('#error_password').removeClass("error").addClass("error_show");}
    });

    $('#register_confirm-password').on('input',function (){
        var input=$(this);
        var is_name=input.val();
        if(is_name ===$('#register_password').val() ){input.removeClass("invalid").addClass("valid");
            $('#error_confirm-password').removeClass("error_show").addClass("error");}
        else{input.removeClass("valid").addClass("invalid");
            $('#error_confirm-password').removeClass("error").addClass("error_show");}
    });

    $('#register_fullName').on('input', function() {
        var input=$(this);
        var is_name=input.val();
        if(is_name){input.removeClass("invalid").addClass("valid");
            $('#error_fullName').removeClass("error_show").addClass("error");}
        else{input.removeClass("valid").addClass("invalid");
            $('#error_fullName').removeClass("error").addClass("error_show");
        }
    });

    $('#register_email').on('input', function() {
        var input=$(this);
        var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        var is_email=re.test(input.val());
        if(is_email){input.removeClass("invalid").addClass("valid");
            $('#error_email').removeClass("error_show").addClass("error");}
        else{input.removeClass("valid").addClass("invalid");
            $('#error_email').removeClass("error").addClass("error_show");}
    });
    $('#register_phoneNumber').on('input', function() {
        var input=$(this);
        var re = /^(0)[0-9]{9,10}$/;
        var is_phone= re.test(input.val());
        if(is_phone){$('#register_phoneNumber').removeClass("invalid").addClass("valid");
            $('#error_phoneNumber').removeClass("error_show").addClass("error");}
        else{$('#register_phoneNumber').removeClass("valid").addClass("invalid");
            $('#error_phoneNumber').removeClass("error").addClass("error_show");}
    });
    $('#register_dateOfBirth').on('input', function() {
        var input=$(this);
        var re = /^(((0[1-9]|1[0-9]|2[0-8])[\/](0[1-9]|1[012]))|((29|30|31)[\/](0[13578]|1[02]))|((29|30)[\/](0[4,6,9]|11)))[\/](19|[2-9][0-9])\d\d$|^29[\/]02[\/](19|[2-9][0-9])(00|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)$/;
        var is_date= re.test(input.val());
        if(is_date){input.removeClass("invalid").addClass("valid");
            $('#error_dateOfBirth').removeClass("error_show").addClass("error");}
        else{input.removeClass("valid").addClass("invalid");
            $('#error_dateOfBirth').removeClass("error").addClass("error_show");}
    });

    $('#register_address').on('input', function() {
        var input=$(this);
        var is_address=input.val();
        if(is_address){input.removeClass("invalid").addClass("valid");
            $('#error_address').removeClass("error_show").addClass("error");}
        else{input.removeClass("valid").addClass("invalid");
            $('#error_address').removeClass("error").addClass("error_show");
        }
    });

    $("#register").click(function(event){
        var form_data=$("#registerForm").serializeArray();
        var error_free=true;
        for (var input in form_data){
            var element=$("#register_"+form_data[input]['name']);
            var valid=element.hasClass("valid");
            if (!valid){ error_free=false;}
           }
        if (!error_free){
            event.preventDefault();
        }
        else{
            registerAccount();
        }
    });
});