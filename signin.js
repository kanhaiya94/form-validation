$(document).ready(function() {
 
  $('#myform').submit(function(e) {
    e.preventDefault();
    var email = $('#email').val();
    var password = $('#password').val();
 
    $(".error").remove();
 
    if (email.length < 1) {
      $('#email').after('<span class="error">This field is required</span>');
    } else {
      var regEx = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      var validEmail = regEx.test(email);
      if (!validEmail) {
        $('#email').after('<span class="error">Enter a valid email</span>');
      }
    }
    if (password.length < 8) {
      $('#password').after('<span class="error">Password must be at least 8 characters long</span>');
    }else{
      var pass_regex =/([0-9])([a-z].*[A-Z])|([A-Z].*[a-z])([0-9])+([!,%,&,@,#,$,^,*,?,_,~])/;
      var ValidPass = pass_regex.test(password);
      if(!ValidPass) {
        $('#password').after('<span class="error">Enter a valid combination password(a-zA-Z0-9_)</span>');
      }
      else if (ValidPass ==1 && email.length >1){
        // $('#message').after('<span class="error">Sucessfully Submitted</span>');
        alert('Sucessfully LogIn');
        window.location.href="https://checkm.herokuapp.com/";
        
      }
    }

  });
});
