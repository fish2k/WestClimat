$(document).ready(function () {
    var body      = $('body'),
        overlay   = $('.overlay'),
        search    = $('.search-button'),
        burger    = $('.header-burger'),
        filterBtn = $('.catalog-filter')

    // верхние слайдеры на главной странице
    if ($('.top-sliders').is(':visible')) { // if exist
            // задержка между слайдами 3 сек
        var globalDelay = 3000,
            // конфигурация слайдеров
            topSliderConfig = {
                slidesPerView: 1,
                    loop: true,

                    on: {
                        init: function () {
                            this.el.style.opacity = 1

                            flipEllipse(-360) // крутим эллипс
                        },
                        slideChange: function () {
                            flipEllipse(-360) // крутим эллипс
                        }
                    },

                    autoplay: {
                        delay: globalDelay
                    }
                }
    
        // инициализация слайдеров
        var topSliderLeft   = new Swiper('.slider-top-left',  topSliderConfig)
        var topSliderRight  = new Swiper('.slider-top-right', topSliderConfig)
        
        // крутим-вертим эллипсом на каждом слайде
        function flipEllipse(angle) {
            var elem = $('.slider-top').find('.slider-top-ellipse')

            $({deg: 0}).animate({deg: angle}, {
                duration: globalDelay,
                step: function(now) {
                    elem.css({
                        transform: 'rotate(' + now.toFixed(0) + 'deg)'
                    })
                }
            })
        }
    }

    // ховер дроп у элементов навигации в шапке сайта
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

    // кнопка "бургер" меню
    burger
        .click(function () {
            body.removeClass('state-search state-filter state-widget')
            body.toggleClass('state-nav')
        })

    // фоновая подложка
    overlay
        .click(function () {
            body.removeClass('state-nav state-search state-filter state-widget')
        })

    // мобильный поиск
    search
        .click(function () {
            body.removeClass('state-nav state-filter state-widget')
            body.toggleClass('state-search')

            $('.search-responsive-input').focus()
        })
    
    // кнопка "открыть фильтр"
    filterBtn
        .click(function () {
            body.removeClass('state-nav state-search state-widget')
            body.addClass('state-filter')
        })
    
    // слайдер товаров по умолчанию
    var productSlider = new Swiper('.products-slider', {
        slidesPerView: 4,
        loop: false,
        spaceBetween: 30,

        navigation: {
            prevEl: '.products-prev',
            nextEl: '.products-next'
        },

        on: {
            init: function () {
                this.el.style.opacity = 1
            }
        },

        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 0
            },
            480: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            1000: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            1440: {
                slidesPerView: 4
            }
        }
    })

    // слайдер брэндов
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

    // слайдеры фотографий в карточке товара,
    // проверка на наличие блока
    if (document.querySelector('.col-detail-content')) {
        // слайдер миниатюр фотографий в карточке товара
        var detailThumbsSlider = new Swiper('.detail-slider-thumbs', {
            slidesPerView: 4,
            spaceBetween: 20,
            freeMode: true,

            on: {
                init: function () {
                    this.el.style.opacity = 1
                }
            },

            breakpoints: {
                0: {
                    direction: 'horizontal',
                    spaceBetween: 15
                },
                481: {
                    direction: 'vertical',
                }
            }
        })

        // главный слайдер в карточке товара
        var detailSlider = new Swiper('.detail-slider-main', {
            slidesPerView: 1,
            height: 'auto',

            on: {
                init: function () {
                    this.el.style.opacity = 1
                }
            },

            navigation: {
                prevEl: '.detail-prev',
                nextEl: '.detail-next'
            },

            thumbs: {
                swiper: detailThumbsSlider
            }

        })
    }

    // очищаем форму в нашей модалке
    $('.modal-custom').on('hide.bs.modal', function () {
        $(this).find('form.modal-form').get(0).reset()
    })
})