$(document).ready(function() {
    $(".hamburger-button").click(function() {
        $(this).toggleClass("active");
        $(".mobile-menu").fadeToggle()
    });

    // Animate on scroll - activate
    AOS.init(); ({
        duration: 500 //value from 0 to 3000, with step 50ms
    });

});