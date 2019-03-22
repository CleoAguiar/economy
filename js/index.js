(function($){
    $(document).ready(function(){
        $('input').attr({
            'placeholder': '1000.00',
            'value': ''
        });
        $('h2').hide().addClass('hidden');
        $('h3').hide().addClass('hidden');

        $('.dinheiro').mask('#.##0,00', {reverse: true});

        $('#calc').click(function(){
            $('#calc').attr('disabled', true);
            $('h3').show().removeAttr('hidden');
            $('h2').show().removeAttr('hidden');
            const currency = $('.dinheiro').val();
            const val = parseFloat($('.dinheiro').mask('###0.00', {reverse: true}).val());
            $('.investment h3').text((val * 0.35).toFixed(2));
            $('.fixed h3').text((val * 0.50).toFixed(2));
            $('.study h3').text((val * 0.05).toFixed(2));
            $('.sporadic h3').text((val * 0.10).toFixed(2));

        });   
        $('#reset').click(function(){
            location.reload(true);
            $('h2').hide().addClass('hidden');
            $('h3').hide().addClass('hidden');
        });
    });
})(jQuery);

