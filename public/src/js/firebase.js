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
     

    var collection = firebase.database().ref('News');
     var post = collection.once('value')
    .then (function (news) {
      news.forEach (function (post) {
          var news = post.val();
          addNewOnPage(news);
          
          
      });
     
  })  
       
         /*   var db = firebase.firestore();

        
           
  

            db.collection("News").get()
                .then(function (news) {
                    news.forEach(function (doc) {
                        var news = doc.data();
                        addNewOnPage(news);
                    });
                })

var news = firebase.database().ref('News');
news.on('value', function(snapshot) {
  pr(snapshot.val());
});

*/





var main = $('<ul>').addClass( "column  main-column" );


/*var sec = $('<section>').addClass( "column main column" );
$( sec ).append( $( li ) );
$(main).append( $( sec ) );
var so = $('<span>').addClass( "column main-column" );
$(main).append( $( so ) );
$(so).append( $($('#odd').val()) );*/
$('#news').append( $( main ) );

    function addNewOnPage(news) {
    



/*
var ev = $('#even').val();
var od = $('#odd').val();

var a= $('<section>')
$( main ).append( $( a ) );
$( a ).append( $( ev ) );

var b = $('<section>').addClass( "column main-column" );
$( main ).append( $( b ) );
$( b ).append( $( od ) );

.prev().attr('id', 'odd')
*/





var link =$('<a>', {
    text: 'Я контейнер-ссылка',
    href: 'http://google.com',
} );

$(link).addClass( "article first-article" );
$(link).append(document.createTextNode(''));
$(main).append( $( link ) );

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



}





/*


  
var oddcolumn= $('<section>').addClass( "column main-column" );
$( main ).append( $( oddcolumn ) );

var od = $('.odd').val();
$( oddcolumn ).append( $( od ) );
*/


});


$(function(){
     

  var collectionmin = firebase.database().ref('Newsmin');
   var postmin = collectionmin.once('value')
  .then (function (newsmin) {
    newsmin.forEach (function (postmin) {
        var newsmin = postmin.val();
        addMinNewOnPage(newsmin);
        
        
    });
   
})  
     
       /*   var db = firebase.firestore();

      
         


          db.collection("News").get()
              .then(function (news) {
                  news.forEach(function (doc) {
                      var news = doc.data();
                      addNewOnPage(news);
                  });
              })

var news = firebase.database().ref('News');
news.on('value', function(snapshot) {
pr(snapshot.val());
});

*/






var mainmin = $('<ul>').addClass( "column" );


/*var sec = $('<section>').addClass( "column main column" );
$( sec ).append( $( li ) );
$(main).append( $( sec ) );
var so = $('<span>').addClass( "column main-column" );
$(main).append( $( so ) );
$(so).append( $($('#odd').val()) );*/
$('#news').append( $( mainmin ) );

  function addMinNewOnPage(newsmin) {
  



/*
var ev = $('#even').val();
var od = $('#odd').val();

var a= $('<section>')
$( main ).append( $( a ) );
$( a ).append( $( ev ) );

var b = $('<section>').addClass( "column main-column" );
$( main ).append( $( b ) );
$( b ).append( $( od ) );

.prev().attr('id', 'odd')
*/


var link =$('<a>', {
  text: 'Я контейнер-ссылка',
  href: 'http://google.com',
} );

$(link).addClass( "article first-article" );

$(mainmin).append( $( link ) );


var body = $('<div>').addClass( "article-body" );
$(link).append( $( body ) );

var h = $('<h2>').addClass( "article-title" );
$( body ).append( $( h ) );
$(h).text(newsmin.header);

var p = $('<p>').addClass( "article-content" );
$( body ).append( $( p ) );
$(p).text(newsmin.text);

var div = $('<p>').addClass( "article-info" );
$( body ).append( $( div ) );




}





/*



var oddcolumn= $('<section>').addClass( "column main-column" );
$( main ).append( $( oddcolumn ) );

var od = $('.odd').val();
$( oddcolumn ).append( $( od ) );
*/


});
});