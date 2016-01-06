$(document).ready(function() {

});

function registerForm() {
    // e.preventDefault();

    // var email = $('input#user_email').val();
    // var password = $('input#user_password').val();
    // var formdata = 'asdf';
    // formData = 'email=' + email + '&password=' + password;
    // console.log('formdata: ' + formdata);
    // console.log($('#register > form').serialize());

    $.ajax({
        type: 'post',
        url: '/auth/signup',
        data: $('#register > form').serialize(),
        success: ajaxSuccess
    });
    return false;
}

function loginForm() {
    $.ajax({
        type: 'post',
        url: '/auth/login',
        data: $('#login > form').serialize(),
        success: ajaxSuccess
    });
    return false;
}

function ajaxSuccess(results) {
    if (results.message == 'success') {
        window.location.replace("/profile");
    }
    $('#log-message').text(results.message).show(400);
}
