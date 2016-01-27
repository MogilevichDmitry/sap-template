var query = Modernizr.mq('(max-width: 768px)');
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
        if (query) {
            if(!$('.bx-wrapper').size()) {
                $('.bxslider').bxSlider({
                    mode: 'horizontal',
                    captions: true
                });

                $('.bxslider2').bxSlider({
                    mode: 'fade',
                    captions: false
                });
            }
        }
    };

    /* FIX HEADER */
    o.fixHeader = function() {
        if (query) {
            $(window).scroll(function () {
                var temp = $(".b_fix");
                var offset = temp.offset(); //Get the current coordinates of the first element,
                                            // or set the coordinates of every element, in the set of matched elements, relative to the document.
                if (offset.top <= 30) {
                    $(".page-header").removeClass('fix-header-mobile');
                }
                else {
                    $(".page-header").addClass('fix-header-mobile');
                }
            });
        }
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

