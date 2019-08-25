import $ from 'jquery';
$(function () {
   $("#quickstart-sign-in").submit(function(e) {

    e.preventDefault();

  $(function(){
    var a = $('#loginField').val();
    var b = $('#passwordField').val();

    var login=a;
    var password=b;
    
    //Sign In User with Email and Password
    firebase.auth().signInWithEmailAndPassword(login, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      window.location.href = 'index.html';
    });
    

    var user = firebase.auth().currentUser;
 var name, email, photoUrl, uid, emailVerified;

if (user != null) {
   name = user.displayName;
   email = user.email;

   uid = user.uid;
   } // The user's ID, unique to the Firebase project. Do NOT use
                   // this value to authenticate with your backend server, if
                   // you have one. Use User.getToken() instead.

    if (user.email == login ) {
      window.location.href = 'contactForm.html';
    } else if (user !== login ) {
      window.location.href = 'index.html';
    }
    
    });
  });
}); 
