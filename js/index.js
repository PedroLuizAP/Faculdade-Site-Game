$(document).ready(function() {
    $('form#form').submit(function() 
    {
        let inputs = $('input,textarea', $(this));

        let preenchido = true;
        inputs.each(function() 
        {
            if ($(this).val() == '') {
                preenchido = false;
                $(this).addClass('erro');
            }
            else {
                $(this).removeClass('erro');
            }
        });
        let div = $('<div>');
        let div2 = $('<div>');
        if (!preenchido) 
        {
            div2.removeClass('alert alert-success');
            if ($('div.alert-warning', this).length == 0) {
                
                div.addClass('alert alert-warning');
                div.html('Alguns campos não foram preenchidos');
                
                $('textarea', form).after(div);

                setTimeout(function() {
                    $('div.alert-warning').hide('slow');
                }, 1000);
            }
        }
        else
        {
            div.removeClass('alert alert-warning');
            if ($('div.alert-success', this).length == 0) {
                div2.addClass('alert alert-success');
                div2.html('Formulario enviado com sucesso');
                
                $('textarea', form).after(div2);

                setTimeout(function() {
                    $('div.alert-success').hide('slow');
                }, 1000);
            }
        }

        return false; 
    });
});
