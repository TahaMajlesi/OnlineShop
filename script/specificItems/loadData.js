$(document).ready(function() {

    window.LoadItemData = function(ProductId) {
        let html = ``
        fetch(`https://fakestoreapi.in/api/products/${ProductId}`).then((res) => res.json()).then((data) => {


            html += `
            <div class="flex w-full mx-auto flex-col md:flex-row">
            <img src="${data["product"]["image"]}" alt="${data["product"]["title"]}" class="md:w-4/12 w-full rounded-t-md md:rounded-none">
            <br>
        
        <div class="md:w-8/12 w-full px-4 flex flex-col">
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
        <div class="w-full flex md:flex-row flex-col my-2 md:border-2 md:border-black md:rounded-lg border-0">
        <button class="!w-full md:w-6/12 hover:bg-green-500 py-4 md:border-e-2 md:rounded-s-lg rounded-lg border-2 md:border-0 border-black text-lg font-bold mx-auto md:mx-0 my-3 md:my-0">Add To Cart <i class="fa-solid fa-bag-shopping"></i></button>
        <button class="!w-full md:w-6/12 py-4 md:rounded-e-lg rounded-lg hover:bg-blue-500 text-lg font-bold mx-auto border-black border-2 md:border-0 md:mx-0">Add To Wishlist <i class="fa-regular fa-bookmark"></i></button>
        </div>
        </div>



            </div>
        
        `

            $("#specificItemHeader").html(html)





        })

    }






})