$(document).ready(function () {

    // prevent default on query
    $('.void').click(function () { return false })

    // top sliders
    if ($('.top-sliders').is(':visible')) { // if exist
        var globalDelay = 3000

        var topSliderConfig = {
            slidesPerView: 1,
                loop: true,

                on: {
                    init: function () {
                        this.el.style.opacity = 1

                        flipEllipse(-360);
                    },
                    slideChange: function () {
                        flipEllipse(-360);
                    }
                },

                autoplay: {
                    delay: globalDelay
                }
            }
    
        // home sliders init
        var topSliderLeft   = new Swiper('.slider-top-left',  topSliderConfig)
        var topSliderRight  = new Swiper('.slider-top-right', topSliderConfig)

        function flipEllipse(angle) {
            var elem = $('.slider-top').find('.slider-top-ellipse');

            $({deg: 0}).animate({deg: angle}, {
                duration: globalDelay,
                step: function(now) {
                    elem.css({
                        transform: 'rotate(' + now.toFixed(0) + 'deg)'
                    });
                }
            });
        }
    }

    // top nav hover drop
    $('.drop-hover').each(function () {
        var _this = $(this),
            getID = _this.data('nav-id')

        _this.hover(
            function () {
                $('.header-nav-drop[data-drop-id=' + getID + ']').stop().fadeIn()
                $('.overlay').addClass('state-nav-hover').css('top', $('.header-nav-drop').offset().top + 'px')
            },
            function () {
                $('.header-nav-drop[data-drop-id=' + getID + ']').stop().fadeOut()
                $('.overlay').removeClass('state-nav-hover').css('top', '0')
            }
        )
    })

    $('.header-burger')
        .click(function () {
            $('body').removeClass('state-search')
            $('body').toggleClass('state-nav')
        })

    $('.overlay')
        .click(function () {
            $('body').removeClass('state-nav state-search')
        })

    $('.search-button')
        .click(function () {
            $('body').removeClass('state-nav')
            $('body').toggleClass('state-search')

            $('.search-responsive-input').focus();
        })

    var productSlider = new Swiper('.products-slider', {
        slidesPerView: 4,
        loop: true,
        spaceBetween: 30,

        navigation: {
            prevEl: '.products-prev',
            nextEl: '.products-next'
        },

        breakpoints: {
            0: {
                slidesPerView: 1
            },
            480: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            1000: {
                slidesPerView: 3
            },
            1440: {
                slidesPerView: 4
            }
        }
    })
})