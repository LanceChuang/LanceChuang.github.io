$(function () {
    $('.box').on('mouseover', function () {
        $('.box').css('background-color', '#A593E0');
    })
    .on('mouseout', function () {
        $('.box').css('background-color', '');
    });
});