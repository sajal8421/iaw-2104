
$(".src").click(function(){
    $(".searchbox").toggleClass("srcb")
})


$(".banner-slider").slick({
    nextArrow:'<i class="fa-solid fa-angle-right next"></i>',
    prevArrow:'<i class="fa-solid fa-angle-left prev"></i>',
    fade:true,
})


$('.js-tilt').tilt({
    maxTilt:5,
})

// about-part start //
$(".about-slider").slick({
    slidesToShow:3,
    arrows:false,
})
// about-part end //
// sponsor-part start //
$(".sponsor-slider").slick({
    slidesToShow: 5,
    autoplay:true,
    autiplaySpeed:5000,
    arrows:false,
    
})
// sponsor-part end //
// checkout-part start //
$(".bottom-slider").slick({
    slidesToShow:4,
    prevArrow:'<i class="fa-solid fa-angle-left prev2"></i>',
    nextArrow:'<i class="fa-solid fa-angle-right next2"></i>',
})
// checkout-part end //
$('.counter').counterUp({
    delay: 10,
    time: 1000
});
// $(".em").click(function(){
//     $('.em').css("border","1px solid #FF4800")
// })
// $(".em").otherclick(function(){
//     $('.em').css("border","1px solid green")
// })
