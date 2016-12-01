var body = document.body,
    overlay = document.querySelector('.overlay-full')

onFullStoryClose = function () {
    //$("#full-story-cont").fadeOut(500);
    //$('body').removeClass('noscroll')
    $("html").css("overflow","auto");
    //$('body').css('overflow', 'auto')
    var overlayOpen = this.className === 'open-overlay';
    overlay.setAttribute('aria-hidden', true);
    body.classList.toggle('noscroll', false);
    overlay.scrollTop = 0;
    overlay.style.zIndex = "-2";
}

$(".btn-read-more").click( function() {
    //$('body').addClass('noscroll')
    //$('body').css('overflow', 'hidden')
    $("#div-full-story").children().eq(1).children().remove();
    $("#div-full-story").children().eq(1).append( $(this).parent().next().children().clone() );
    //$("#full-story-cont").fadeIn(500);
    $("html").css("overflow","hidden");
    var overlayOpen = this.className === 'open-overlay';
    overlay.setAttribute('aria-hidden', false);
    overlay.style.zIndex = "9999";
    body.classList.toggle('noscroll', true);
    overlay.scrollTop = 0;
});
