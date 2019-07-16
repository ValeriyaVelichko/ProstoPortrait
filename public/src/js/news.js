import $ from 'jquery';

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
