let BannerSwiper = new Swiper(".BannerSwiper", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,

    },
    loop: true,
    autoplay: {
        delay: 60000,
        disableOnInteraction: false,
    },
});

let Discount = new Swiper(".Discount-Time", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    loop: true,
    autoplay: {
        delay: 60000,
        disableOnInteraction: false,
    },
});


let TvParty = new Swiper(".TvParty", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    loop: true,
    autoplay: {
        delay: 60000,
        disableOnInteraction: false,
    },
});