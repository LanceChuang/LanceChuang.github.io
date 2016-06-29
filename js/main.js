$(function () {
    //About Me的特效
    $('#box section:nth-child(-n+3)').on('mouseover', function () {
        $(this).css('background-color', '#A593E0');
    })
    .on('mouseout', function () {
        $(this).css('background-color', '');
    });

    //使用typeIt套件改變文字內容
    $(".type-It").typeIt({//['I\'m becoming a student again.!', 'I &hearts WEB!']
    	strings: '<span>I\'m becoming a student in USC!</span>',
    	speed: 100,
    	lifeLike: true,
    	autoStart: true,
    	loop: true
    })
    .tiPause(900).tiDelete(29).tiType('<span> pursue Data Science!</span>')
    .tiType('<p>Looking for an internship</p>');
});