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
    var tempId = "#" + $(this).attr("id");
    var tempValue = $(tempId).val();
    //console.log(tempId);

    /* change value button*/
    if ( tempValue == "more ▼"){
       // console.log($(tempId).val());
        $(tempId).val("less ▲");
       // console.log($(tempId).val());
    }
    else {
        $(tempId).val("more ▼");
    }

    /* set visible */
    if ($('.more-info-about-partner').hasClass("visible")){
        $('.more-info-about-partner').removeClass("visible");
    }
    else{
        $('.more-info-about-partner').addClass("visible");
    }

    /* move array and change img src */
    if ( tempId == "#p-ibm"){
        checkExcessClasses();
        $('.more-info-about-partner').addClass("c-ibm");
        $('.partner-extra-img').attr("src", "./images/content/ibm-for-lb.jpg")
    }
    else if( tempId == "#p-hp"){
        checkExcessClasses();
        $('.more-info-about-partner').addClass("c-hp");
        $('.partner-extra-img').attr("src", "./images/content/hp-for-lb.jpg")
    }
    else if( tempId == "#p-cisco"){
        checkExcessClasses();
        $('.more-info-about-partner').addClass("c-cisco");
        $('.partner-extra-img').attr("src", "./images/content/cisco-for-lb.jpg")
    }
    else if( tempId == "#p-sas"){
        checkExcessClasses();
        $('.more-info-about-partner').addClass("c-sas");
        $('.partner-extra-img').attr("src", "./images/content/sas-for-lb.jpg")
    }
    else if( tempId == "#p-dell"){
        checkExcessClasses();
        $('.more-info-about-partner').addClass("c-dell");
        $('.partner-extra-img').attr("src", "./images/content/dell-for-lb.jpg")
    }
});


function checkExcessClasses(){
    if( $('.more-info-about-partner').hasClass("c-ibm") || $('.more-info-about-partner').hasClass("c-hp")
        || $('.more-info-about-partner').hasClass("c-cisco") || $('.more-info-about-partner').hasClass("c-sas")
            ||$('.more-info-about-partner').hasClass("c-dell")){

                        $('.more-info-about-partner').removeClass("c-ibm");
                        $('.more-info-about-partner').removeClass("c-hp");
                        $('.more-info-about-partner').removeClass("c-cisco");
                        $('.more-info-about-partner').removeClass("c-sas");
                        $('.more-info-about-partner').removeClass("c-dell");
    }
}