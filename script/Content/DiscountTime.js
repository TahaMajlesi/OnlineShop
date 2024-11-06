$(document).ready(function() {
    let html = ``
    let i = 0
    fetch("https://fakestoreapi.in/api/products?limit=25/").then((res) => res.json()).then((data) => {
        data["products"].forEach(element => {
            if ((element["id"] / 4) % 1 == 0) {
                i++
                html = ``
            }

            html += `
            <div class="md:w-2/12 w-6/12  flex flex-col items-center cursor-pointer bg-white rounded-md py-2">
            <img src="${element["image"]}" class="rounded-t-md">
            <div class="w-full flex flex-col mt-2 items-center">
            <p>${element["model"]}</p>
            <div class="flex flex-row w-full justify-around my-2">
            <p>Price : ${element["price"]}$</p>
            <span class="bg-red-400 rounded-md px-2">Discount : ${Math.floor((Math.random() * 30) + 1)}%</span></div>
            </div>
            </div>`
            $(`#Discount-Time>div:nth-of-type(${i})`).html(html)

        });

    })
})