$( document ).ready(function() {
  var window_width = $(window).width();
  
  if(window_width < 900){
    $('#main-text').removeClass('col-7')
    $('#main-text').addClass('col-12 container')

    $('#form-container').removeClass('col-5')
    $('#form-container').addClass('row')
  }
}
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
    
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  }))