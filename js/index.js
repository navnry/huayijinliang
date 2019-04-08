let wow = new WOW({
    boxClass: 'ani',
    delay: 100
});
wow.init();
var bannerSiwper = new Swiper(".banner .swiper-container", {
    speed: 800,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },
    pagination: {
        el: ".banner .swiper-pagination",
        clickable: true,
    }
});
var zizhiSwiper = new Swiper(".ambient_item .swiper-container", {
    speed: 800,
    slidesPerView: 3,
    spaceBetween: 22,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
    navigation: {
        nextEl: '.ambient_item .swiper-button-next',
        prevEl: '.ambient_item .swiper-button-prev',
    },
});
$("h2,h3,h4,.more,.news_list li").addClass("ani fadeInUp");
$(".plate_nav>.wrapper>ul>li").click(function () {
    var index = $(this).index();
    $(this).addClass("on").siblings().removeClass("on");
    $(".plate_container .plate_item").eq(index).addClass("on").siblings().removeClass("on");
});
$(".doctor_nav>ul>li").hover(function () {
    var index = $(this).index();
    $(this).addClass("on").siblings().removeClass("on");
    $(".doctor_container .doctor_item").eq(index).addClass("on").siblings().removeClass("on");
});

$(".instance_nav>ul>li").click(function () {
    var index = $(this).index();
    $(this).addClass("on").siblings().removeClass("on");
    $(".instance_container .instance_item").eq(index).addClass("on").siblings().removeClass("on");
});
$(".ambient li").click(function () {
    var index = $(this).index();
    $(this).addClass("on").siblings().removeClass("on");
    $(".ambient_container .ambient_item").eq(index).addClass("on").siblings().removeClass("on");
});


