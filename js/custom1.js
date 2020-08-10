$('.owl-carouse-2').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    pagination: false,
    autoplay: 500,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
})