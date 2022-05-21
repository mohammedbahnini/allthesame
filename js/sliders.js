$(document).ready( ()=>{

    const options = {
        slidesToShow: 3,
        infinite: true,
        dots: false,
        prevArrow: `<button class="prev-slide"></button>`,
        nextArrow: `<button class="next-slide"></button>`,
        responsive: [
            {
                breakpoint : 1200 , 
                settings : {
                    slidesToShow : 2 , 
                    arrows : true , 
                    dots : true 
                }
            },
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    slidesToShow: 1,
                    arrows: false,
                    centerMode: false
                }
            } 
            
    ]
    };

    $('.team .members').slick(options);


    $('.ambassadors .members').slick(options);

});