$(document).ready(function() {

    $("#Discount-Time , #TvParty").on("click", '.ItemCard', function() {
        window.parent.LoadItemData($(this).attr("id"))


        if ($("#content").hasClass("flex")) {
            $("#content").removeClass("flex")
            $("#content").addClass("hidden")
            $("#specificItem").removeClass("hidden")
            $("#specificItem").addClass("flex")
        } else {
            $("#content").addClass("flex")
            $("#content").removeClass("hidden")
            $("#specificItem").addClass("hidden")
            $("#specificItem").removeClass("flex")

        }



    })
})