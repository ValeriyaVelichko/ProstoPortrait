import $ from 'jquery';

$("#sign-in").submit(function(e) {
  e.preventDefault();

  $(function(){
    var loginField = $('#loginField').val();
    var passwordField = $('#passwordField').val();
    var login=loginField;
    var password=passwordField;
 
    firebase.auth().signInWithEmailAndPassword(login, password)
      .then(function(){
        var user = firebase.auth().currentUser;
        if (user.email == login ) {
          window.location.href = 'addNew.html';
        }
      })
      .catch(function(aa) {
        var aa = $('<p>').addClass( "error" ); 
        $('#sign-in').append( $( aa ) );
        $(aa).text('Неверный логин и/или пароль. Пожалуйста, попробуйте еще раз') ;
      });
  });
});

