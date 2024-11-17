$(document).ready(function() {
    $("#contactBtn").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#contact-section").offset().top
        }, 1000);
    });
})