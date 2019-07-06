import jQuery from 'jquery';

jQuery(function() {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAt_HqgXnSMl-zSxJW27ge_AIUQDSXc8eg",
    authDomain: "prostoportrait.firebaseapp.com",
    databaseURL: "https://prostoportrait.firebaseio.com",
    projectId: "prostoportrait",
    storageBucket: "prostoportrait.appspot.com",
    messagingSenderId: "770788079932"
  };
  firebase.initializeApp(config);

  document.addEventListener('DOMContentLoaded', 
  function() {
    try {
      let app = firebase.app();
      let features = ['auth', 'database', 'messaging', 'storage'].filter(feature => typeof app[feature] === 'function');
      document.getElementById('load').innerHTML = `Firebase SDK loaded with ${features.join(', ')}`;
    } catch (e) {
      console.error(e);
      document.getElementById('load').innerHTML = 'Error loading the Firebase SDK, check the console.';
    }
  });
});