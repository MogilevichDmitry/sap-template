
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
        var query = Modernizr.mq('(max-width: 768px)');
        if (query) {
            if(!$('.bx-wrapper').size()) {
                $('#slider1').bxSlider({
                    mode: 'horizontal',
                    captions: true
                });

                $('#slider2').bxSlider({
                    mode: 'horizontal',
                    captions: true,
                    minSlides: 1,
                    maxSlides: 1,
                });
            }
        }
       /* $('.slider4').bxSlider({
            slideWidth: 300,
            minSlides: 2,
            maxSlides: 3,
            moveSlides: 1,
            slideMargin: 10
        });*/
    };

    /* FIX HEADER */
    o.fixHeader = function() {
        var query = Modernizr.mq('(max-width: 768px)');
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
       /* else{  // for desktop
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
    };    /* FIX HEADER */


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

