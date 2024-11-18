$(document).ready(function() {
    let productsList = []
    let html = ``

    fetch("https://fakestoreapi.in/api/products?limit=150/").then((res) => res.json()).then((data) => {
        data["products"].forEach(element => {
            productsList.push(element)
        });

    })



    $('#SearchInput').keypress(function(e) {
        html = ``
        var key = e.which;
        if (key == 13) // the enter key code
        {
            let inputVal = $("#SearchInput").val()
            if (!inputVal == "") {

                productsList.forEach(element => {
                    let elemToLower = element["title"].toLowerCase()
                    if (elemToLower.includes(inputVal.toLowerCase())) {
                        html += `<div class="w-full bg-red-400 flex items-start rounded-b-md" id="${element["id"]}">
                        <img class="w-2/12 aspect-square" src="${element["image"]}">
                        <div class="w-10/12 bg-violet-500 flex flex-col ">
                        <p class="w-full flex px-3 text-center bg-yellow-200 my-1">${element["title"]}</p>
                        <p class="w-full flex justify-around bg-blue-500 my-1">
                        <span>Price : ${element["price"]}</span>
                        <span>Brand : ${element["brand"]}</span>
                        <span>Category : ${element["category"]}</span>
                        </p>
    
                        </div>
                        
                        </div>`
                    }
                });

                $("#searchSuggestion").fadeIn(200)

            } else {
                $("#searchSuggestion").fadeOut(200)
            }



            $("#searchSuggestionBox").html(html)


        }
    });





})