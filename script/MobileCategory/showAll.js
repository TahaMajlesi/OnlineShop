$(document).ready(function() {
    let categories = []
    let html = ``
    fetch("https://fakestoreapi.in/api/products/category").then((res) => res.json()).then((data) => {
        data["categories"].forEach(element => {
            categories.push(element)
            html += `
            <div class="flex flex-col w-5/12 border-2 border-black rounded-md justify-between bg-white">
            <img id="categoryItem-${element}" class="rounded-t-md">
            <p class="w-full flex justify-center text-lg font-semibold">${element}</p>
            </div>
            `
        });
        for (let i = 0; i < categories.length; i++) {
            fetch(`https://fakestoreapi.in/api/products/category?type=${categories[i]}`).then((res) => res.json()).then((data) => {
                $(`#categoryItem-${categories[i]}`).attr("src", data["products"][1]["image"])
            })
        }


        $("#mobileCategory").html(html)

    })

})