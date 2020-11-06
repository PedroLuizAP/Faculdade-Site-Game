$(document).ready(function() {
    $('form#form').submit(function() {
        let inputs = $('input,textarea', $(this));

        let preenchido = true;
        inputs.each(function() {
            if ($(this).val() == '') {
                preenchido = false;
                $(this).addClass('erro');
            }
            else {
                $(this).removeClass('erro');
            }
        });

        if (!preenchido) {
            if ($('div.alert', this).length == 0) {
                let div = $('<div>');
                div.addClass('alert alert-warning');
                div.html('Alguns campos não foram preenchidos');

                $('textarea', form).after(div);

                setTimeout(function() {
                    $('div.alert').hide('slow');
                }, 3000);
            }
        }

        return preenchido;
    });
});