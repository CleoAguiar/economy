(function($){
    $(document).ready(function(){
        $('input').attr({
            'placeholder': '1000.00',
            'value': ''
        });

        $('.dinheiro').mask('#.##0,00', {reverse: true});

        $('#calc').click(function(){
            $('#calc').attr('disabled', true);
            $('div').removeClass('invisible');
            const currency = $('.dinheiro').val();
            const val = parseFloat($('.dinheiro').mask('###0.00', {reverse: true}).val());
            $('.investment h4').text((val * 0.35).toFixed(2));
            $('.fixed h4').text((val * 0.50).toFixed(2));
            $('.study h4').text((val * 0.05).toFixed(2));
            $('.sporadic h4').text((val * 0.10).toFixed(2));

        });   
        $('#reset').click(function(){
            location.reload(true);
        });
    });
})(jQuery);

