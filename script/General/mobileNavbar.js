$(document).ready(function() {
    if ($("#content").hasClass("flex")) {
        $("#mobileNavBar").removeClass("fixed")
        $("#mobileNavBar").addClass("sticky")
    } else {
        $("#mobileNavBar").addClass("fixed")
        $("#mobileNavBar").removeClass("sticky")
    }
})