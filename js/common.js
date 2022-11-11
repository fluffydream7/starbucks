$('.depth1 > li > a').on('click', function(){
    if ( $(this).find('i').hasClass('fa-angle-down') ){
        $(this).find('i').addClass('fa-angle-up')
        .removeClass('fa-angle-down')
    }else {
        $(this).find('i').addClass('fa-angle-down')
        .removeClass('fa-angle-up')
    }

    $(this).next()
    .stop().slideToggle(500)

    $(this).parent().siblings().find('.depth2')
    .stop().slideUp(500)

    $(this).parent().siblings().find('i').addClass('fa-angle-down')
    .removeClass('fa-angle-up')
    
    return false
})
