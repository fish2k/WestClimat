$(document).ready(function () {

    // prevent default on query
    $('.void').click(function () { return false })

    // top sliders
    if ($('.top-sliders').is(':visible')) { // if exist
        var topSliderConfig = {
            slidesPerView: 1,
                loop: true,

                on: {
                    init: function () {
                        this.el.style.opacity = 1
                    }
                },

                autoplay: {
                    delay: 3000
                }
            }
    
        // home sliders init
        var topSliderLeft   = new Swiper('.slider-top-left',  topSliderConfig)
        var topSliderRight  = new Swiper('.slider-top-right', topSliderConfig)
    }

    // top nav hover drop
    $('.drop-hover').each(function () {
        var _this      = $(this),
            getID      = _this.data('nav-id')

        _this.hover(
            function () {
                $('.header-nav-drop[data-drop-id=' + getID + ']').stop().fadeIn();
                $('.overlay').addClass('on-nav-hover').css('top', $('.header-nav-drop').offset().top + 'px');
            },
            function () {
                $('.header-nav-drop[data-drop-id=' + getID + ']').stop().fadeOut();
                $('.overlay').removeClass('on-nav-hover').css('top', '0');
            }
        )
    })

    var productSlider = new Swiper('.products-slider', {
        slidesPerView: 4,
        loop: true,
        spaceBetween: 30
    })
})