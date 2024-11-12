$(document).ready(function() {
    $("#mobileCategoryMenuItem").on("click", function() {
        if ($("#mobileCategory").hasClass("hidden")) {
            if ($("#content").hasClass("flex")) {
                $("#content").removeClass("flex")
                $("#content").addClass("hidden")
                $("#mobileCategory").addClass("flex")
                $("#mobileCategory").removeClass("hidden")
            } else if ($("#specificItem").hasClass("flex")) {
                $("#specificItem").removeClass("flex")
                $("#specificItem").addClass("hidden")
                $("#mobileCategory").addClass("flex")
                $("#mobileCategory").removeClass("hidden")
            } else {
                $("#mobileCategory").addClass("flex")
                $("#mobileCategory").removeClass("hidden")
            }
        } else {
            $("#mobileCategory").removeClass("flex")
            $("#mobileCategory").addClass("hidden")
            $("#content").removeClass("hidden")
            $("#content").addClass("flex")
        }
    })
    $("#mobileHomeMenuItem , #HomeMenuItem").on("click", function() {
        $("#mobileCategory").removeClass("flex")
        $("#mobileCategory").addClass("hidden")
    })


})