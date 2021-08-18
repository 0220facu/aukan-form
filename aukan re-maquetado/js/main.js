$( document ).ready(function() {

    $( "#sib-form" ).validate({
      rules: {
          EMAIL: {
            required: true,
            email: true
          },
          PHONE: {
            required:true,
            minlength:10,
            number:true
          },
          FIRSTNAME:{
            required:true,
            minlength:10
          }
      },
      messages: {
          EMAIL:{
              required: "Por favor ingrese su e-mail.",
              email: "Ingrese su e-mail en el formato correcto."
          },
          PHONE:{
            required: "Por favor ingrese su telefono.",
            number: "Ingrese sólo números.",
            minlength: "Debe ingresar al menos 10 caracteres."
          },
          FIRSTNAME:{
            required: "Por favor ingrese su nombre y apellido.",
            minlength: "Debe ingresar al menos 10 caracteres."
        }
      },
      errorElement: 'span',
      errorPlacement: function (error, element) {
          error.addClass('invalid-feedback');
          element.closest('.form-group').append(error);
      },
      highlight: function (element, errorClass, validClass) {
          $(element).addClass('is-invalid');
      },
      unhighlight: function (element, errorClass, validClass) {
          $(element).removeClass('is-invalid');
      }
  });

});