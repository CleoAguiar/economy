$(document).ready(function(){
    $('input').attr({
        'placeholder': '1000.00',
        'value': ''
    });
    $('h2').hide();
    $('h3').hide();

    $('.dinheiro').mask('#.##0,00', {reverse: true});

    $('#calc').click(function(){
        $('h3').show();
        $('h2').show();
        const currency = $('.dinheiro').val();
        const val = parseFloat($('.dinheiro').mask('###0.00', {reverse: true}).val());
        $('.investment h3').text(val * 0.35);
        // $('.fixed h3').text(val * 0.50);
        // $('.study h3').text(val * 0.05);
        // $('.sporadic h3').text(val * 0.10);

    });   
    $('#reset').click(function(){
        location.reload(true);
        $('h2').hide();
        $('h3').hide();
    });
});