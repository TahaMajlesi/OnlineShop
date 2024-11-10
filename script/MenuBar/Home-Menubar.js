$(document).ready(function() {
    $("#HomeMenuItem").on("click", function() {

        if (!$("#content").hasClass("flex")) {

            $("#content").addClass("flex")
            $("#content").removeClass("hidden")
            $("#specificItem").addClass("hidden")
            $("#specificItem").removeClass("flex")
        }
    })
})