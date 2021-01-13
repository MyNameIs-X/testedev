/* Coloque o JS neste arquivo */
$(document).ready(function(){
    $('.banner-list').slick({
        dots: false,
        arrows: true,
    });

    $('.nav-icon').on('click', function(){
        if($('.navigation').hasClass('active')){
            $('.navigation').removeClass('active');
        }else{
            $('.navigation').addClass('active')
        }
    });

    $(window).on('scroll', function(e){
        if($(window).scrollTop() > 200){
            $('.bottom-links').addClass('active');
        }else{
            $('.bottom-links').removeClass('active');
        }
    });

    $('.up').on('click', function(){
        $('html, body').animate({scrollTop:0}, 'slow'); //slow, medium, fast
    });
});