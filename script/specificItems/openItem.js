$(document).ready(function() {

    $("#Discount-Time , #TvParty , #searchSuggestionBox , #MobileSearchSuggestionBox").on("click", '.ItemCard', function() {
        window.parent.LoadItemData($(this).attr("id"))


        if ($("#content").hasClass("flex")) {
            $("#content").removeClass("flex")
            $("#content").addClass("hidden")
            $("#specificItem").removeClass("hidden")
            $("#specificItem").addClass("flex")
        } else if ($("#mobileCategory").hasClass("flex")) {
            $("#mobileCategory").removeClass("flex")
            $("#mobileCategory").addClass("hidden")
            $("#specificItem").removeClass("hidden")
            $("#specificItem").addClass("flex")
        }



    })
})