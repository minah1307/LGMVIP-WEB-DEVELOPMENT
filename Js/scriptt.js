// JAVASCRIPT:

//For "Life in Zippy" Images:
src='http://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.2.1.js'
$(function () {
    var currentMousePos = { x: -1, y: -1 };
    $(document).mousemove(function (event) {
        currentMousePos.x = event.pageX;
        currentMousePos.y = event.pageY;
        if ($('#modal').css('display') != 'none') {
            $('#modal').css({
                top: currentMousePos.y - 200,
                left: currentMousePos.x + 12
            });
        }
    });
    $('.image').on('mouseover', function () {
        var image = $(this).find('img');
        var modal = $('#modal');
        $(modal).html(image.clone());
        $(modal).css({
            top: currentMousePos.y,
            left: currentMousePos.x + 12
        });
        $(modal).show();

    });
    $('.image').on('mouseleave', function () {
        $(modal).hide();
    });
});



