import $ from 'jquery';

$(function() {
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

  $(function(){


    try {
      let app = firebase.app();
      let features = ['auth', 'database', 'messaging', 'storage'].filter(feature => typeof app[feature] === 'function');
    //  document.getElementById('load').innerHTML = `Firebase SDK loaded with ${features.join(', ')}`;
    } catch (e) {
      console.error(e);
      document.getElementById('load').innerHTML = 'Error loading the Firebase SDK, check the console.';
    }
  });

  $(function(){
            var db = firebase.firestore();

            var main = $('<main>').addClass( "main columns" );
           
  

            db.collection("News").get()
                .then(function (news) {
                    news.forEach(function (doc) {
                        var news = doc.data();
                        addNewOnPage(news);
                    });
                })

    function addNewOnPage(news) {
    

var section = $('<section>').addClass( "column main-column" );
$(main).append( $( section ) );

var link =$('<a>', {
    text: 'Я контейнер-ссылка',
    href: 'http://google.com',
} );
$(link).addClass( "article first-article" );
$(link).append(document.createTextNode(''));
$( section ).append( $( link ) );

var body = $('<div>').addClass( "article-body" );
$(link).append( $( body ) );

var h = $('<h2>').addClass( "article-title" );
$( body ).append( $( h ) );
$(h).text(news.header);

var p = $('<p>').addClass( "article-content" );
$( body ).append( $( p ) );
$(p).text(news.text);

var div = $('<p>').addClass( "article-info" );
$( body ).append( $( div ) );

var span = $('<span>');
$(span).text(news.source);
$( div ).append( $( span ) );

$('#news').append( $( main ) );   
}   
});   

});