/* jQuery Pre loader
 -----------------------------------------------*/
$(window).load(function () {
    $('.preloader').fadeOut(1000); // set duration in brackets    
});


/* HTML document is loaded. DOM is ready. 
-------------------------------------------*/
$(document).ready(function () {

    /* Hide mobile menu after clicking on a link
      -----------------------------------------------*/
    $('.navbar-collapse a').click(function () {
        $(".navbar-collapse").collapse('hide');
    });


    /* Parallax section
       -----------------------------------------------*/
    function initParallax() {
        $('#intro').parallax("100%", 0.1);
    }

    initParallax();


    /* Back top
    -----------------------------------------------*/
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.go-top').fadeIn(200);
        } else {
            $('.go-top').fadeOut(200);
        }
    });
    // Animate the scroll to top
    $('.go-top').click(function (event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, 300);
    })


    /* wow
    -------------------------------*/
    new WOW({mobile: true}).init();

    /* Slide Show
   -----------------------------------------------*/

        var owl = $('.owl-carousel');
        owl.owlCarousel({
            items: 1,
            loop: true,
            margin: 10,
            autoplay: true,
            autoplayTimeout: 4500,
            autoplayHoverPause: true
        });
});

