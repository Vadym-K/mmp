$(document).ready(function() {

    $('input#name, input#mail, input#phone, textarea#message').unbind().blur( function(){       
        var id = $(this).attr('id');
        var val = $(this).val();
        switch(id)
            {
                case 'name':
                    var rv_name = /^[\sa-zA-Zа-яА-Я]+$/;

                    if(val.length > 2 && val != '' && rv_name.test(val)) {
                        $(this).closest('.input').addClass('not_error');
                        $(this).removeClass('error');
                        $(this).next('.error-box').text('Принято')
                                                    .css('color','green')
                                                    .animate({'paddingLeft':'10px'},400)
                                                    .animate({'paddingLeft':'5px'},400);
                    } else {
                        $(this).closest('.input').removeClass('not_error');
                        $(this).removeClass('not_error').addClass('error');
                        $(this).next('.error-box').html('Заполните правильно все поля!')
                                                    .css('color','#e31e24')
                                                    .animate({'paddingLeft':'10px'},400)
                                                    .animate({'paddingLeft':'5px'},400);
                    }
                break;

                case 'phone':
                    var rv_name = /^[0-9+]+$/;

                    if(val.length > 5 && val != '' && rv_name.test(val)) {
                        $(this).closest('.input').addClass('not_error');
                        $(this).removeClass('error');
                        $(this).next('.error-box').text('Принято')
                                                    .css('color','green')
                                                    .animate({'paddingLeft':'10px'},400)
                                                    .animate({'paddingLeft':'5px'},400);
                    } else {
                        $(this).closest('.input').removeClass('not_error');
                        $(this).removeClass('not_error').addClass('error');
                        $(this).next('.error-box').html('Заполните правильно все поля!')
                                                    .css('color','#e31e24')
                                                    .animate({'paddingLeft':'10px'},400)
                                                    .animate({'paddingLeft':'5px'},400);
                    }
                break;

                case 'mail':
                    var rv_email = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;

                    if(val != '' && rv_email.test(val)) {
                        $(this).closest('.input').addClass('not_error');
                        $(this).removeClass('error');
                        $(this).next('.error-box').text('Принято')
                                                .css('color','green')
                                                .animate({'paddingLeft':'10px'},400)
                                                .animate({'paddingLeft':'5px'},400);
                    } else {
                        $(this).closest('.input').removeClass('not_error');
                        $(this).removeClass('not_error').addClass('error');
                        $(this).next('.error-box').html('Заполните правильно все поля!')
                                                    .css('color','#e31e24')
                                                    .animate({'paddingLeft':'10px'},400)
                                                    .animate({'paddingLeft':'5px'},400);
                    }
                break;

                case 'message':
                    if(val != '' && val.length < 5000) {
                        $(this).closest('.textarea').addClass('not_error');
                        $(this).next('.error-box').text('Принято')
                                                .css('color','green')
                                                .animate({'paddingLeft':'10px'},400)
                                                .animate({'paddingLeft':'5px'},400);
                    } else {
                        $(this).closest('.textarea').removeClass('not_error');
                        $(this).removeClass('not_error').addClass('error');
                        $(this).next('.error-box').html('Поле обязательно для заполнения')
                                                .css('color','#e31e24')
                                                .animate({'paddingLeft':'10px'},400)
                                                .animate({'paddingLeft':'5px'},400);
                    }
                break;
            }
    });

    $('form#feedback-form button').on('click', function(e){
        e.preventDefault();

        if($('form#feedback-form .not_error').length === 4) {
            $('#thanks-order').closest('.overlay').addClass('active');
            $('#thanks-order').addClass('open');
        } else {
            return false;
        }

    });
});

$(document).ready(function() {
    
    $('input#begin-project-name, input#begin-project-phone').unbind().blur( function(){       
        var id = $(this).attr('id');
        var val = $(this).val();
        switch(id)
            {
                case 'begin-project-name':
                    var rv_name = /^[\sa-zA-Zа-яА-Я]+$/;

                    if(val.length > 2 && val != '' && rv_name.test(val)) {
                        $(this).closest('.input').addClass('not_error');
                        $(this).removeClass('error');
                        $(this).next('.error-box').text('Принято')
                                                    .css('color','green')
                                                    .animate({'paddingLeft':'10px'},400)
                                                    .animate({'paddingLeft':'5px'},400);
                    } else {
                        $(this).closest('.input').removeClass('not_error');
                        $(this).removeClass('not_error').addClass('error');
                        $(this).next('.error-box').html('Заполните правильно все поля!')
                                                    .css('color','#e31e24')
                                                    .animate({'paddingLeft':'10px'},400)
                                                    .animate({'paddingLeft':'5px'},400);
                    }
                break;

                case 'begin-project-phone':
                    var rv_name = /^[0-9+]+$/;

                    if(val.length > 5 && val != '' && rv_name.test(val)) {
                        $(this).closest('.input').addClass('not_error');
                        $(this).removeClass('error');
                        $(this).next('.error-box').text('Принято')
                                                    .css('color','green')
                                                    .animate({'paddingLeft':'10px'},400)
                                                    .animate({'paddingLeft':'5px'},400);
                    } else {
                        $(this).closest('.input').removeClass('not_error');
                        $(this).removeClass('not_error').addClass('error');
                        $(this).next('.error-box').html('Заполните правильно все поля!')
                                                    .css('color','#e31e24')
                                                    .animate({'paddingLeft':'10px'},400)
                                                    .animate({'paddingLeft':'5px'},400);
                    }
                break;
            }
    });

    $('form#feedback-form-discuss-project button').on('click', function(e){
        

        if($('form#feedback-form-discuss-project .not_error').length === 2) {
            $('#chose-us').closest('.overlay').addClass('active');
            $('#chose-us').addClass('open');
        } else {
            return false;
        }

    });
});

$(document).ready(function() {
    
    $('input#consultation-project-name, input#consultation-project-phone').unbind().blur( function(){       
        var id = $(this).attr('id');
        var val = $(this).val();
        switch(id)
            {
                case 'consultation-project-name':
                    var rv_name = /^[\sa-zA-Zа-яА-Я]+$/;

                    if(val.length > 2 && val != '' && rv_name.test(val)) {
                        $(this).closest('.input').addClass('not_error');
                        $(this).removeClass('error');
                        $(this).next('.error-box').text('Принято')
                                                    .css('color','green')
                                                    .animate({'paddingLeft':'10px'},400)
                                                    .animate({'paddingLeft':'5px'},400);
                    } else {
                        $(this).closest('.input').removeClass('not_error');
                        $(this).removeClass('not_error').addClass('error');
                        $(this).next('.error-box').html('Заполните правильно все поля!')
                                                    .css('color','#e31e24')
                                                    .animate({'paddingLeft':'10px'},400)
                                                    .animate({'paddingLeft':'5px'},400);
                    }
                break;

                case 'consultation-project-phone':
                    var rv_name = /^[0-9+]+$/;

                    if(val.length > 5 && val != '' && rv_name.test(val)) {
                        $(this).closest('.input').addClass('not_error');
                        $(this).removeClass('error');
                        $(this).next('.error-box').text('Принято')
                                                    .css('color','green')
                                                    .animate({'paddingLeft':'10px'},400)
                                                    .animate({'paddingLeft':'5px'},400);
                    } else {
                        $(this).closest('.input').removeClass('not_error');
                        $(this).removeClass('not_error').addClass('error');
                        $(this).next('.error-box').html('Заполните правильно все поля!')
                                                    .css('color','#e31e24')
                                                    .animate({'paddingLeft':'10px'},400)
                                                    .animate({'paddingLeft':'5px'},400);
                    }
                break;
            }
    });

    $('form#feedback-form-consultation button').on('click', function(e){

        if($('form#feedback-form-consultation .not_error').length == 2) {
            $('#chose-us').closest('.overlay').addClass('active');
            $('#chose-us').addClass('open');
        } else {
            return false;
        }

    });
});

$(document).ready(function() {
    
    $('input#want-project-name, input#want-project-phone, input#want-project-link').unbind().blur( function(){       
        var id = $(this).attr('id');
        var val = $(this).val();
        switch(id)
            {
                case 'want-project-name':
                    var rv_name = /^[\sa-zA-Zа-яА-Я]+$/;

                    if(val.length > 2 && val != '' && rv_name.test(val)) {
                        $(this).closest('.input').addClass('not_error');
                        $(this).removeClass('error');
                        $(this).next('.error-box').text('Принято')
                                                    .css('color','green')
                                                    .animate({'paddingLeft':'10px'},400)
                                                    .animate({'paddingLeft':'5px'},400);
                    } else {
                        $(this).closest('.input').removeClass('not_error');
                        $(this).removeClass('not_error').addClass('error');
                        $(this).next('.error-box').html('Заполните правильно все поля!')
                                                    .css('color','#e31e24')
                                                    .animate({'paddingLeft':'10px'},400)
                                                    .animate({'paddingLeft':'5px'},400);
                    }
                break;

                case 'want-project-phone':
                    var rv_name = /^[0-9+]+$/;

                    if(val.length > 5 && val != '' && rv_name.test(val)) {
                        $(this).closest('.input').addClass('not_error');
                        $(this).removeClass('error');
                        $(this).next('.error-box').text('Принято')
                                                    .css('color','green')
                                                    .animate({'paddingLeft':'10px'},400)
                                                    .animate({'paddingLeft':'5px'},400);
                    } else {
                        $(this).closest('.input').removeClass('not_error');
                        $(this).removeClass('not_error').addClass('error');
                        $(this).next('.error-box').html('Заполните правильно все поля!')
                                                    .css('color','#e31e24')
                                                    .animate({'paddingLeft':'10px'},400)
                                                    .animate({'paddingLeft':'5px'},400);
                    }
                break;

                case 'want-project-link':
                    var rv_name = /\./;

                    if(val.length > 2 && val != '' && rv_name.test(val)) {
                        $(this).closest('.input').addClass('not_error');
                        $(this).removeClass('error');
                        $(this).next('.error-box').text('Принято')
                                                    .css('color','green')
                                                    .animate({'paddingLeft':'10px'},400)
                                                    .animate({'paddingLeft':'5px'},400);
                    } else {
                        $(this).closest('.input').removeClass('not_error');
                        $(this).removeClass('not_error').addClass('error');
                        $(this).next('.error-box').html('Заполните правильно все поля!')
                                                    .css('color','#e31e24')
                                                    .animate({'paddingLeft':'10px'},400)
                                                    .animate({'paddingLeft':'5px'},400);
                    }
                break;
            }
    });

    $('form#feedback-form-want-project button').on('click', function(e){

        if($('form#feedback-form-want-project .not_error').length == 3) {
            $('#i-want-site').closest('.overlay').addClass('active');
            $('#i-want-site').addClass('open');
        } else {
            return false;
        }

    });
});
