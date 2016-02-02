/**
 * Created by Дмитрий on 24.01.2016.
 */

$(document).on('ready', function () {

    // set visible authorization-form if click on "login"
    $('.login-link')
        .on('click', function(event){
        $('.authorization-form').addClass("visible");
            $("html,body").css("overflow","hidden");
    });

    // delete visible class authorization-form if click on "close-button"
    $('.close-auth-form')
        .on('click', function (event) {
            $('.authorization-form').removeClass("visible");
            $("html,body").css("overflow","auto");
    });

    //switch jquery-tabs/angular-tabs
    $('.checkbox')
        .on('click', function (event){
            $('.switcher').toggleClass("shareJquery");

            if($('.switcher').hasClass("shareJquery")){
                $('.tab-content').hide();
                $('.partners-tabs').hide();
                $('.jquery-tabs').show();
            }
            else{
                $('.tab-content').show();
                $('.partners-tabs').show();
                $('.jquery-tabs').hide();
            }
    });

    //set active class on active jquery-tab
    $('ul.tabs-jquery').on('click', 'li:not(.jt-active)', function() {
        $(this)
            .addClass('jt-active').siblings().removeClass('jt-active');
    });


    // handling click on .moreless
    $(document).on('click', '.moreless', function() {

        var tempId = "#" + $(this).attr("id");
        var tempValue = $(tempId).val();
        resetValue();

        // change value button
        if ( tempValue == "more ▼"){
            $(tempId).val("less ▲");
        }
        else {
            $(tempId).val("more ▼");
        }


        // show/hide partner-block
        $('.more-info-about-partner').show(500);

        if($(tempId).val() == "more ▼" ){
            $('.more-info-about-partner').hide(400);
        }

        // move arrow and change img src
        if ( tempId == "#p-ibm" || tempId == '#p-ibm-a' || tempId == '#p-ibm-b'){
            checkExcessClasses();
            $('.more-info-about-partner').addClass("c-ibm");
            $('.partner-extra-img').attr("src", "./images/content/ibm-for-lb.jpg")
        }
        else if( tempId == "#p-hp" || tempId == '#p-hp-a' || tempId == '#p-hp-b'){
            checkExcessClasses();
            $('.more-info-about-partner').addClass("c-hp");
            $('.partner-extra-img').attr("src", "./images/content/hp-for-lb.jpg")
        }
        else if( tempId == "#p-cisco" || tempId == '#p-cisco-a' || tempId == '#p-cisco-b'){
            checkExcessClasses();
            $('.more-info-about-partner').addClass("c-cisco");
            $('.partner-extra-img').attr("src", "./images/content/cisco-for-lb.jpg")
        }
        else if( tempId == "#p-sas" || tempId == '#p-sas-a' || tempId == '#p-sas-b'){
            checkExcessClasses();
            $('.more-info-about-partner').addClass("c-sas");
            $('.partner-extra-img').attr("src", "./images/content/sas-for-lb.jpg")
        }
        else if( tempId == "#p-dell" || tempId == '#p-dell-a' || tempId == '#p-dell-b'){
            checkExcessClasses();
            $('.more-info-about-partner').addClass("c-dell");
            $('.partner-extra-img').attr("src", "./images/content/dell-for-lb.jpg")
        }
    });



});

/**
 *  Show error message on UI
 *  @param {container, string}
 * */
function showError(container, errorMessage){
    container.className = 'error-valid';
    var msgElem = document.createElement('span');
    msgElem.className = "error-message";
    msgElem.innerHTML = errorMessage;
    container.appendChild(msgElem);
}

/**
 *  Delete error message
 *  @param {container}
 * */
function resetError(container) {
    container.className = '';
    if (container.lastChild.className == "error-message") {
        container.removeChild(container.lastChild);
    }
}

/**
 *  Check is form being valid
 *  @param {form}
 * */
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


// delete excess classes
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

// set all value more
function resetValue(){
    var more = "more ▼";
    $('#p-ibm').val();
    $('#p-hp').val(more);
    $('#p-cisco').val(more);
    $('#p-sas').val(more);
    $('#p-dell').val(more);
    $('#p-ibm-a').val(more);
    $('#p-hp-a').val(more);
    $('#p-cisco-a').val(more);
    $('#p-sas-a').val(more);
    $('#p-dell-a').val(more);
    $('#p-ibm-b').val(more);
    $('#p-hp-b').val(more);
    $('#p-cisco-b').val(more);
    $('#p-sas-b').val(more);
    $('#p-dell-b').val(more);
}