$('.contact-widget').click(function () {
    $('body').removeClass('state-nav state-search state-filter');
    $('body').toggleClass('state-widget')
})