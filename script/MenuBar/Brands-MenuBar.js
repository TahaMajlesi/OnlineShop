$(document).ready(function() {
    let html = ``;
    let BrandList = [];

    fetch("https://fakestoreapi.in/api/products?limit=150/")
        .then((res) => res.json())
        .then((data) => {
            data["products"].forEach((element) => {
                if (!BrandList.includes(element["brand"])) {
                    BrandList.push(element["brand"]);
                }
            });
            BrandList.sort();

        });

    $("#BrandsMenuItem").hover(function() {

            BrandList.forEach((element) => {
                if (!document.getElementById(element)) {
                    html += `<li id="${element}" class="my-2 text-lg cursor-pointer w-full flex justify-center">${element}</li>`;
                    $("#SubMenu>ul").html(html);
                }
            });

            $("#SubMenu").removeClass("hidden");
            $("#SubMenu").addClass("flex");
        },
        function() {

            if (!$("#SubMenu").is(":hover")) {
                $("#SubMenu").removeClass("flex");
                $("#SubMenu").addClass("hidden");
            }
        });

    $("#SubMenu").mouseleave(
        function() {
            $(this).removeClass("flex");
            $(this).addClass("hidden");
        }
    );
});