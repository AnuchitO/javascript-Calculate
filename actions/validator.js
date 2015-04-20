$(function(){

    if( $.isFunction($.fn.inputmask) ){
        $(".inputmask").inputmask();
    }
    
    $('.validator-form').bootstrapValidator({
        message: 'This value is not valid',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            firstNumber: {
                message: 'The number is not valid',
                validators: {
                    notEmpty: {
                        message: 'The number is required and cannot be empty'
                    }
                }
            },
            secondNumber: {
                message: 'The number is not valid',
                validators: {
                    notEmpty: {
                        message: 'The number is required and cannot be empty'
                    },
                     callback: {
                        message: 'Not allow to divide by zero',
                        callback: function(value, validator) {
                            var a = !($('#operator').val()=='Divide' && $('#in-second-number').val()==0);
                            return a;
                        }
                    }
                }
            }
        }
    });

    $(".dropdown-menu li a").click(function(){
      var selText = this.innerHTML;
      $('#operator').val($(this).text().trim());
      $(this).parents('.btn-group').find('.dropdown-toggle').html(selText+'  <span class="caret"></span>');
      $('#validator-form-cal').bootstrapValidator('validate');
    });

    $('#resetBtn').click(function() {
        $('.validator-form').data('bootstrapValidator').resetForm(true);
        $("#answer").text("");
    });

    $('#btn-answer').click(function(){
        $('#validator-form-cal').bootstrapValidator('validate');
        Calculate.execution();
    });

});


            
