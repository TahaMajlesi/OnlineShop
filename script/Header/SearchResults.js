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
                <p class="w-full flex justify-around my-1">
                <span>Model : ${element["model"]}</span>
                <span>Brand : ${element["brand"]}</span>
                <span>Category : ${element["category"]}</span>
                <span>Price : ${element["price"]}$</span>
                
                
                </p>

                </div>
                
                </div>`
            }
        });
        $("#searchSuggestionBox").html(html)
    }

    $('#SearchInput').keypress(function(e) {
        html = ``
        var key = e.which;
        if (key == 13) // the enter key code
        {
            let inputVal = $("#SearchInput").val()
            if (!inputVal == "") {
                results(inputVal)

                $("#searchSuggestion").fadeIn(100)

            } else {
                $("#searchSuggestion").fadeOut(100)
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






})