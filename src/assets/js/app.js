// ES6, ES7, ES8 supported

jQuery($ => {

    $(document).ready(() => {

        //User dropdown click
        $('.dropdown-btn-js').click(function (e) {
            e.preventDefault();
           $('.header__dropdown').slideToggle(500);
        });

        // Car slider
        $('.cars-slider-js').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        arrows: false,
                        dots: true
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                        dots: true
                    }
                }
            ]
        });

    });

});
