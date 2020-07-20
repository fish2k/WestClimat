$(document).ready(function () {

    // prevent default on query
    $('.void').click(function () { return false })

    var body    = $('body'),
        overlay = $('.overlay'),
        search  = $('.search-button'),
        burger  = $('.header-burger')

    // top sliders
    if ($('.top-sliders').is(':visible')) { // if exist
        var globalDelay = 3000

        var topSliderConfig = {
            slidesPerView: 1,
                loop: true,

                on: {
                    init: function () {
                        this.el.style.opacity = 1

                        flipEllipse(-360)
                    },
                    slideChange: function () {
                        flipEllipse(-360)
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

    burger
        .click(function () {
            body.removeClass('state-search')
            body.toggleClass('state-nav')
        })

    overlay
        .click(function () {
            body.removeClass('state-nav state-search')
        })

    search
        .click(function () {
            body.removeClass('state-nav')
            body.toggleClass('state-search')

            $('.search-responsive-input').focus()
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

    var brandsSider = new Swiper('.brands-slider', {
        slidesPerView: 6,
        loop: false,
        spaceBetween: 22,

        on: {
            init: function () {
                this.el.style.opacity = 1
            }
        },

        autoplay: {
            delay: 2000
        },

        breakpoints: {
            0: {
                slidesPerView: 1
            },
            375: {
                slidesPerView: 2,
                spaceBetween: 0
            },
            500: {
                slidesPerView: 3
            },
            768: {
                slidesPerView: 4
            },
            990: {
                slidesPerView: 5
            },
            1200: {
                slidesPerView: 6
            }
        }
    })
})
