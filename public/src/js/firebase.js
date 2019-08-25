import $ from 'jquery';

$(function () {
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
       
  var main = $('<ul>').addClass( "column  main-column" );
    $('#news').append( $( main ) );

  function addNewOnPage(news) {

  var link =$('<a>', {
    href: span
  } );
  var span = $('<span>');
  $(span).text(news.source);
  $(link).addClass( "article first-article" );
  $(link).append(document.createTextNode(''));
  $(main).append( $( link ) );

  var figure = $('<figure>').addClass( "article-image is-16by9" );
  $(link).append(figure);

  var img = $('<img>'); 
  var setSrc = news.image;
  img.attr('src', setSrc); 

  $( figure ).append( $( img ) );
  var body = $('<div>').addClass( "article-body" );
  $(link).append( $( body ) );

  var h = $('<h2>').addClass( "article-title" );
  $( body ).append( $( h ) );
  $(h).text(news.header);

  var p = $('<p>').addClass( "article-content" );
  $( body ).append( $( p ) );
  $(p).text(news.text);

  var div = $('<a>').addClass( "article-info" );
  var setSrcLink = news.source;
  div.attr('href', setSrcLink);
  $( body ).append( $( div ) );

  var span = $('<span>');
  $(span).text(news.sourceName);
  $( div ).append( $( span ) );
  }
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

  var mainmin = $('<ul>').addClass( "column" );
  $('#news').append( $( mainmin ) );
    
  function addMinNewOnPage(newsmin) {

  var link =$('<a>', {
    href: span
  } );
  var span = $('<span>');
  $(span).text(newsmin.source);
  $( div ).append( $( span ) );
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


  var div = $('<a>').addClass( "article-info" );
  var setSrcLink = newsmin.source;
  div.attr('href', setSrcLink);
  $( body ).append( $( div ) );
  
  var span = $('<span>');
  $(span).text(newsmin.sourceName);
  $( div ).append( $( span ) );
}
  
  });
});

