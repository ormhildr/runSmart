$(document).ready(function() {
    $('.carousel__inner').slick({
        speed: 300,
        prevArrow: '<button type="button" class="slick-prev"><img src="../logo/leftarrow.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../logo/rightarrow.png"></button>',
        responsive: [{
            breakpoint: 992,
            settings: {
                dots: true,
                arrows: false
            }
        }]
    });
});