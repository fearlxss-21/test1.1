$(document).foundation()

jQuery(document).ready(function($) {
    $(".scroll").click(function(event) {
        event.preventDefault();
        $('html,body').animate( {scrollTop:$(this.hash).offset().top} , 500);
    });
});

$(document).ready(function () {
    $('input').click(function () {
        $('input:not(:checked)').parent().removeClass("show-next");
        $('input:checked').parent().addClass("show-next");
    });    
});