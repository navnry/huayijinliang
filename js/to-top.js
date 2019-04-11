window.onscroll = function () {
    if (document.documentElement.scrollTop + document.body.scrollTop > 400) {
        $("#toTop").fadeIn()
    } else {
        $("#toTop").fadeOut()
    }
};
$("#toTop").click(function () {
    $('html , body').animate({scrollTop: 0}, 500);
});
