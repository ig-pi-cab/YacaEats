let carouselWidth = $('.carousel-inner')[0].scrollWidth;
let cardWidth = $('.carousel-item').width();

let scrollPosition = 0;

$('.carousel-control-next').on('click', function(){
    if(scrollPosition < (carouselWidth - (cardWidth * 4))){
        console.log('next')
        scrollPosition = scrollPosition + cardWidth;
        $('.carousel-inner').animate({scrollLeft: scrollPosition}, 600)
    }
});

$('.carousel-control-previous').on('click', function(){
    if(scrollPosition > 0){
        console.log('prev')
        scrollPosition = scrollPosition - cardWidth;
        $('.carousel-inner').animate({scrollLeft: scrollPosition}, 600)
    }
});