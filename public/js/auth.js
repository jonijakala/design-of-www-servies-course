// $(document).ready(function() { });

function registerForm() {
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
        window.location.replace(results.url);
    } else {
        $('#log-message').text(results.message).show(400);
    }
}
