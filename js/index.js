$(document).ready(function(){
    $('.dinheiro').mask('#.##0,00', {reverse: true});
    $('p:first').click(function(){
        $('h2').show();
        const currency = $('.dinheiro').val();
        const val = parseFloat($('.dinheiro').mask('0.00').val());
        $('.investment h3').text(val * 0.35);
        // $('.fixed h3').text(val * 0.50);
        // $('.study h3').text(val * 0.05);
        // $('.sporadic h3').text(val * 0.10);

    });    
});