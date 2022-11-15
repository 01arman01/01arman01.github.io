$(window).scroll(function () {
    $(".bg").css("background-position","100% " + ($(this).scrollTop() / 30 - 20 ) + "px");
});