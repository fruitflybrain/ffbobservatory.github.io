jQuery(document).ready(function($) {

    'use strict';


    //SMOOTH SCROLL
    smoothScroll.init({
        speed: 500, // How fast to complete the scroll in milliseconds
        easing: 'easeInOutCubic', // Easing pattern to use
        updateURL: false, // Boolean. Whether or not to update the URL with the anchor hash on scroll
        callbackBefore: function(toggle, anchor) {}, // Function to run before scrolling
        callbackAfter: function(toggle, anchor) {} // Function to run after scrolling
    });
});



$(window).load(function() {


    //PARALLAX BACKGROUND
    $(window).stellar({
        horizontalScrolling: false,
    });


    //HEADER ANIMATION
    $(window).scroll(function() {
        if ($(".navbar").offset().top > 1) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
        }
    });

});

$(window).bind('scroll', function() {
     if ($(window).scrollTop() > 500) {
         /*$("#banner").slideUp(100);*/
         $("#medulla-vid")[0].play();
         $("#whole-brain-vid")[0].play();
     }
     else {
         /*$("#banner").slideDown(100);*/
         $("#medulla-vid")[0].pause();
         $("#whole-brain-vid")[0].pause();
     }
});

document.getElementById("medulla-vid").playbackRate = 3.0;

var shiftWindow = function() { scrollBy(0, -80) };
if (location.hash) shiftWindow();
window.addEventListener("hashchange", shiftWindow);
