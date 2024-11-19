$(document).ready(function() {
    let productsList = []
    let html = ``

    fetch("https://fakestoreapi.in/api/products?limit=150/").then((res) => res.json()).then((data) => {
        data["products"].forEach(element => {
            productsList.push(element)
        });

    })

    function results(inputValue) {
        productsList.forEach(element => {
            let elemTitleToLower = element["title"].toLowerCase()
            let elemModelToLower = element["model"].toLowerCase()

            if (elemTitleToLower.includes(inputValue.toLowerCase()) || elemModelToLower.includes(inputValue.toLowerCase())) {
                html += `<div class="w-full flex flex-col hover:border-black border-y-2 cursor-pointer ItemCard" id="${element["id"]}">
                <p class="w-full flex px-3 my-1">${element["title"]}</p>
                <p class="w-full flex justify-around my-1 flex-col sm:flex-row px-3 sm:px-3">
                <span class="w-full">Model : ${element["model"]}</span>
                <span class="w-full">Brand : ${element["brand"]}</span>
                <span class="w-full">Category : ${element["category"]}</span>
                <span class="w-full">Price : ${element["price"]}$</span>
                
                
                </p>

                </div>
                
                </div>`
            }
        });
        $("#MobileSearchSuggestionBox").html(html)
        $("#searchSuggestionBox").html(html)
    }

    $('#SearchInput').keypress(function(e) {
        html = ``
        var key = e.which;
        if (key == 13) // the enter key code
        {
            e.preventDefault();
            let inputVal = $("#SearchInput").val()
            if (!inputVal == "") {
                results(inputVal)


                $("#searchSuggestion").fadeIn(100)

            } else {
                $("#searchSuggestion").fadeOut(100)
            }






        }
    });

    $('#MobileSearchBar').keypress(function(e) {
        html = ``
        var key = e.which;
        if (key == 13) // the enter key code
        {
            e.preventDefault();
            let inputVal = $("#MobileSearchBar").val()
            if (!inputVal == "") {
                results(inputVal)

                $("#MobileSearchSuggestions").fadeIn(100)
                $("#MobileSearchBar").addClass("rounded-b-none")
                $("#MobileSearchBar").addClass("border-b-0")
            } else {
                $("#MobileSearchSuggestions").fadeOut(100)
                $("#MobileSearchBar").removeClass("rounded-b-none")
                $("#MobileSearchBar").removeClass("border-b-0")
            }
        }
    });








    $("#searchbtn").click(function() {
        html = ``

        let inputVal = $("#SearchInput").val()
        if (!inputVal == "") {

            results(inputVal)

            $("#searchSuggestion").fadeIn(100)

        } else {
            $("#searchSuggestion").fadeOut(100)
        }
    })

    $("#searchSuggestion").mouseleave(function() {
        $("#searchSuggestion").fadeOut()
    })


    $('body').click(function(event) {
        if (!$(event.target).is('#MobileSearchSuggestions')) {
            $('#MobileSearchSuggestions').fadeOut(100);
            $("#MobileSearchBar").removeClass("rounded-b-none")
            $("#MobileSearchBar").removeClass("border-b-0")
        }
    });






})