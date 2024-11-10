$(document).ready(function() {

    $("#Discount-Time , #TvParty").on("click", '.ItemCard', function() {
        console.log(true)
        if ($("#content").hasClass("flex") && $("#specificItemHeader").hasClass("hidden")) {
            console.log(true);

            ProductId = $(this).attr("id")
            $("#content").removeClass("flex")
            $("#content").addClass("hidden")
            $("#specificItemHeader").removeClass("hidden")
            $("#specificItemHeader").addClass("flex")
        }



    })
})