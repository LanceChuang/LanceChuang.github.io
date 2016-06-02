$(function () {
    $('#box section:nth-child(-n+3)').on('mouseover', function () {
        $(this).css('background-color', '#A593E0');
    })
    .on('mouseout', function () {
        $(this).css('background-color', '');
    });
});