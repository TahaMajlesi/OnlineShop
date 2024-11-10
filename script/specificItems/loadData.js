$(document).ready(function() {

    window.LoadItemData = function(ProductId) {
        let html = ``
        fetch(`https://fakestoreapi.in/api/products/${ProductId}`).then((res) => res.json()).then((data) => {


            html += `
        <img src="${data["product"]["image"]}" alt="${data["product"]["title"]}" class="w-4/12">
        
        <div class="w-8/12 px-4 flex flex-col">
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

        <ul class="flex flex-col text-lg font-medium border-b-2 border-black py-2">
        <li>Price : ${data["product"]["price"]}$</li>
        <li>Brand : ${data["product"]["brand"]}</li>
        <li>Model : ${data["product"]["model"]}</li>
        <li>Color : ${data["product"]["color"]}</li>
        <li>Category : ${data["product"]["category"]}</li>
        </ul>
        <div class="w-full flex my-2 border-2 border-black rounded-lg">
        <button class="w-6/12 hover:bg-green-500 py-4 border-e-2 rounded-s-lg border-black text-lg font-bold">Add To Cart <i class="fa-solid fa-bag-shopping"></i></button>
        <button class="w-6/12 py-4 rounded-e-lg hover:bg-blue-500 text-lg font-bold">Add To Wishlist <i class="fa-regular fa-bookmark"></i></button>
        </div>
        </div>
        `

            $("#specificItemHeader").html(html)





        })

    }






})