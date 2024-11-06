$(document).ready(function() {
    $("#HeaderUserBtn").on("click", function() {
        if ($("#loginScreen").hasClass("hidden")) {
            $("#loginScreen").removeClass("hidden");
            $("#loginScreen").addClass("flex");
        } else {
            $("#loginScreen").addClass("hidden");
            $("#loginScreen").removeClass("flex");
        }
    })
    $("#mobileUserBtn").on("click", function() {
        if ($("#loginScreen").hasClass("hidden")) {
            $("#loginScreen").removeClass("hidden");
            $("#loginScreen").addClass("flex");
        } else {
            $("#loginScreen").addClass("hidden");
            $("#loginScreen").removeClass("flex");
        }
    })
    $("#closelogin").on("click", function() {
        if ($("#loginScreen").hasClass("flex")) {
            $("#loginScreen").addClass("hidden");
            $("#loginScreen").removeClass("flex");
        }
    })


})