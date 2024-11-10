$(document).ready(function() {
    let html = ``
    let i = 0
    fetch("https://fakestoreapi.in/api/products/category?type=tv&products?limit=20").then((res) => res.json()).then((data) => {
        data["products"].forEach(element => {
            if ((element["id"] / 4) % 1 == 0) {
                i++
                html = ``
            }

            html += `
            <div class="md:w-2/12 w-6/12 flex flex-col items-center cursor-pointer bg-white rounded-md justify-center ItemCard" id="${element["id"]}">
            <img src="${element["image"]}" class="rounded-t-md">
            <div class="w-full flex flex-col items-center">
            <p>${element["model"]}</p>
            <div class="flex md:flex-row flex-col w-full justify-around my-2 items-center">
            <p>Price : ${element["price"]}$</p>
            <span class="md:bg-red-400 md:rounded-md md:px-2">Discount : ${Math.floor((Math.random() * 30) + 1)}%</span></div>
            </div>
            </div>`
            $(`#TvParty>div:nth-of-type(${i})`).html(html)

        });

    })
})