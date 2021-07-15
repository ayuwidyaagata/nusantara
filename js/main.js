$(document).ready(function(){

    //owl-carousel untuk slide wisata
    $('.owl-carousel').owlCarousel({
        loop: false,
        autoplay: true,
        autoplayTimeout:2000,
        dots: false,
        nav:true,
        navText:[$('.owl-navigation .owl-nav-prev') ,$('.owl-navigation .owl-nav-next')]
    });
});
