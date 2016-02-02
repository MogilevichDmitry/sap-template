
common = (function($) {
    var o = {};
    // Final version
    o.showTopNavigation = function(){
        var $wrapper = $('.hidden-block-wrapper');
        var $button = $wrapper.find('> .show-block');

        $button.click(function(){
            var $currentBlock = $(this).find('+ .hidden-block');

            if ($currentBlock.hasClass('visible')) {
                panelToggle($currentBlock); // Current block is hiding
            } else {
                var $activeBlock = $wrapper.find('.visible');
                var isActiveBlock = $activeBlock.size() > 0;

                if (isActiveBlock) {
                    panelToggle($activeBlock); // Active block is hiding
                }

                panelToggle($currentBlock); // Current block is appearing
            }
        });

        function panelToggle(panel){
            var button = panel.parent().find('> .show-block');

            panel.slideToggle(function(){
                panel.toggleClass('visible').removeAttr('style');
            });
            button.toggleClass('active');
        }
    };



    // I
    o.sliderInitialization = function() {
        var queryMobile = Modernizr.mq('(max-width: 767px)');
        var queryTablet = Modernizr.mq('(min-width:768px)');
        var queryDesktop = Modernizr.mq('(min-width: 1024px)');
        if (queryMobile) {
            if(!$('.bx-wrapper').size()) {
                $('#slider1').bxSlider({
                    mode: 'horizontal',
                    captions: true
                });

                $('#slider2').bxSlider({
                    mode: 'horizontal',
                    captions: true,
                    minSlides: 1,
                    maxSlides: 1
                });
            }
        }
        if(queryTablet){
            $('#slider2').bxSlider({
                mode: 'horizontal',
                captions: true,
                slideWidth:210,
                slideMargin: 20,
                minSlides: 3,
                maxSlides: 3
            });
        }
        if(queryDesktop){
            $('#slider3').bxSlider({
                captions: true,
                slideWidth:210,
                minSlides: 5,
                maxSlides: 5,
                slideMargin: 192,
                moveSlides: 1
            });
        }

        //for ie8  only
        if (navigator.userAgent.match(/MSIE 8/) !== null) {
            $('#slider3').bxSlider({
                captions: true,
                slideWidth:210,
                minSlides: 5,
                maxSlides: 5,
                slideMargin: 192,
                moveSlides: 1
            });
        }

    };

    // fix navigation-mobile
    o.fixHeader = function() {
        var query = Modernizr.mq('(max-width: 1024px)');
        if (query) { //for mobile
            $(window).scroll(function () {
                var temp = $(".b_fix");
                var offset = temp.offset();
                if (offset.top <= 10) {
                    $(".page-header").removeClass('fix-navigation-mobile');
                }
                else {
                    $(".page-header").addClass('fix-navigation-mobile');
                }
            });
        }
        // fix main-navigation
      /*  else{
            $(window).scroll(function () {
                var temp = $(".b_fix");
                var offset = temp.offset();
                if (offset.top <= 60) {
                    $(".main-navigation").removeClass('fix-navigation-desktop');
                }
                else {
                    $(".main-navigation").addClass('fix-navigation-desktop');
                }
            });
        }*/
    };


    return o;
})($);



$(document).ready(function(){
    common.showTopNavigation();
    common.sliderInitialization();
    common.fixHeader();
});


$(window).resize(function(){
    common.sliderInitialization();
    common.fixHeader();
});

