import $ from 'jquery';

$(function() {
    var mywindow = $(window);
    var mypos = mywindow.scrollTop();
    var up = false;
    var newscroll;
    mywindow.scroll(function () {
        newscroll = mywindow.scrollTop();
        if (newscroll > mypos && !up) {
            $('.headerMain').stop().slideToggle();
            up = !up;
            console.log(up);
        } else if(newscroll < mypos && up) {
            $('.headerMain').stop().slideToggle();
            up = !up;
        }
        mypos = newscroll;
    });
});
