$(document).ready(function() {
    $("#HeaderUserBtn , #mobileUserBtn").click(function() {
        $("#loginScreen").fadeToggle(70); // Toggle with fade effect over 500 milliseconds
    });
    $("#closelogin").click(function() {
        $("#loginScreen").fadeToggle(70);
    })

})