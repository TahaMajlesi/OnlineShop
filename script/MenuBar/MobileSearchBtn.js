$(document).ready(function() {
    $("#MobileSearchBtn").click(function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 1000, function() {
            $('#MobileSearchBar').focus();
        });

    });

})