$(function () {
    $("#up_button").load("../html_components/up_button.html");
});

$(function () {

    $(window).scroll(function() {

        if($(this).scrollTop() !== 0) {
            $('#up_button').fadeIn();
        } else {
            $('#up_button').fadeOut();
        }
    });

    $('#up_button').click(function() {

        $('body,html').animate({scrollTop:0},100);

    });
});
