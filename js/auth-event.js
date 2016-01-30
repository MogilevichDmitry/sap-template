/**
 * Created by Дмитрий on 24.01.2016.
 */
$(document).on('ready', function () {
    $('.login-link')
        .on('click', function(event){
        $('.authorization-form').addClass("visible");
            $("html,body").css("overflow","hidden");
    });

    $('.close-auth-form')
        .on('click', function (event) {
            $('.authorization-form').removeClass("visible");
            $("html,body").css("overflow","auto");
        });
});
/* validate */
function showError(container, errorMessage){
    container.className = 'error-valid';
    var msgElem = document.createElement('span');
    msgElem.className = "error-message";
    msgElem.innerHTML = errorMessage;
    container.appendChild(msgElem);
}
function resetError(container) {
    container.className = '';
    if (container.lastChild.className == "error-message") {
        container.removeChild(container.lastChild);
    }
}
function validate(form){
    var elems = form.elements;

    resetError(elems.email.parentNode);
    var re = /^(([a-zA-Z]|[0-9])|([-]|[_]|[.]))+[@](([a-zA-Z0-9])|([-])){2,63}[.](([a-zA-Z0-9]){2,63})+$/gi;

    if (!elems.email.value) {
        showError(elems.email.parentNode, ' Укажите email.');
    }
    else if (!re.test(elems.email.value)){
        showError(elems.email.parentNode,'Проверьте правильность введенного email адреса.');
    }
       resetError(elems.password.parentNode);
    if (!elems.password.value) {
        showError(elems.password.parentNode, ' Укажите пароль.');
    }
}

$(document).on('click', '.moreless', function() {
    var tempId = this.id;
    var tempValue = document.getElementById(tempId).value;
    if ( tempValue == "more ▼"){
        document.getElementById(tempId).value = "less ▲";
    }
    else {
        document.getElementById(tempId).value = "more ▼";
    }

    if ($('.more-info-about-partner').hasClass("visible")){
        $('.more-info-about-partner').removeClass("visible");
    }
    else{
        $('.more-info-about-partner').addClass("visible");
    }
});
