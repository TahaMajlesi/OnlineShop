$(document).ready(function() {
    let ProductId = 0
    let html = ``
    fetch(`https://fakestoreapi.in/api/products/${ProductId}`).then((res) => res.json()).then((data) => {
        html += `
        <img src="${data["product"]["image"]}" alt="${data["product"]["title"]}" class="w-4/12">
        
        <div class="w-8/12 bg-yellow-600 px-4 flex flex-col">
        <p class="text-xl font-semibold">${data["product"]["title"]}</p>

        <div class="w-full flex py-2 border-b-2 border-black">
        <p class="w-full flex gap-x-10">
        <span>
        ${Math.floor((Math.random() * 5) + 1)} / 5
        <i class="fa-regular fa-star hover:text-yellow-400 cursor-pointer"></i>
        <i class="fa-regular fa-star hover:text-yellow-400 cursor-pointer"></i>
        <i class="fa-regular fa-star hover:text-yellow-400 cursor-pointer"></i>
        <i class="fa-regular fa-star hover:text-yellow-400 cursor-pointer"></i>
        <i class="fa-regular fa-star hover:text-yellow-400 cursor-pointer"></i>
        </span>
        <span>ratings : ${Math.floor((Math.random() * 10000) + 1)}</span>

        <span>Overall Pick</span>
        </p> 
        </div>
        <p class="py-2 border-b-2 border-black text-pretty">${data["product"]["description"]}</p>

        <ul class="bg-violet-400 flex flex-col text-lg font-medium border-b-2 border-black py-2">
        <li>Price : ${data["product"]["price"]}$</li>
        <li>Brand : ${data["product"]["brand"]}</li>
        <li>Model : ${data["product"]["model"]}</li>
        <li>Color : ${data["product"]["color"]}</li>
        <li>Category : ${data["product"]["category"]}</li>
        </ul>
        </div>
        `


        $("#specificItemHeader").html(html)





    })





})