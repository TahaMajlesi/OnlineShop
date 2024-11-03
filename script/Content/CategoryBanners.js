$(document).ready(function() {
    let html = ``
    let i = 0
    fetch("https://fakestoreapi.in/api/products?limit=4/").then((res) => res.json()).then((data) => {
        data["products"].forEach(element => {
            html = `<img src="${element["image"]}" class="rounded-full">
            <p class="font-semibold text-xl my-1">${element["category"]}</p>`
            $(`#circle-banner>div:nth-of-type(${element["id"]})`).html(html)
        });

    });
})