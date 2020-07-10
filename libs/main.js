$(document).ready(function () {
    $('.void').click( () => { return false } );

    // top sliders
    var topLeftSlider,
        topRightSlider,
        topSliderDelay   = 3000,
        topSliderConfig  = {
            slidesPerView: 1,
            loop: true,

            on: {
                init: function () {
                    this.el.style.opacity = 1
                }
            },

            autoplay: {
                delay: topSliderDelay
            }
        }

    topLeftSlider  = new Swiper('.slider-top-left',  topSliderConfig)
    topRightSlider = new Swiper('.slider-top-right', topSliderConfig)
})