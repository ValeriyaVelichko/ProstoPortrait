import $ from 'jquery';

$(function () {
    var collection = firebase.database().ref('News');
    var post = collection.once('value')
        .then(function (news) {
            news.forEach(function (post) {
                var news = post.val();
                addNewOnPage(news);
            });
        })
    var main = $('<ul>').addClass("column  main-column");
    $('#news').append($(main));

    function addNewOnPage(news) {
        var link = $('<a>', {
            href: source
        });

        var source = $('<span>');
        $(source).text(news.source);
        $(link).addClass("article first-article");
        $(link).append(document.createTextNode(''));
        $(main).append($(link));

        var image = $('<figure>').addClass("article-image is-16by9");
        $(link).append(image);

        var img = $('<img>');
        var setSrc = news.image;
        img.attr('src', setSrc);

        $(image).append($(img));
        var body = $('<div>').addClass("article-body");
        $(link).append($(body));

        var header = $('<h2>').addClass("article-title");
        $(body).append($(header));
        $(header).text(news.header);

        var content = $('<p>').addClass("article-content");
        $(body).append($(content));
        $(content).text(news.text);

        var info = $('<a>').addClass("article-info");
        var setSrcLink = news.source;
        info.attr('href', setSrcLink);
        $(body).append($(info));

        var sourceBefore = $('<span>');
        $(sourceBefore).text('Читать далее: ');
        $(info).append($(sourceBefore));

        var source = $('<span>');
        $(source).text(news.sourceName);
        $(info).append($(source));
    }

});

$(function () {
    var collectionMin = firebase.database().ref('Newsmin');
    var postMin = collectionMin.once('value')
        .then(function (newsMin) {
            newsMin.forEach(function (postMin) {
                var newsMin = postMin.val();
                addMinNewOnPage(newsMin);
            });
        })

    var mainmin = $('<ul>').addClass("column");
    $('#news').append($(mainmin));

    function addMinNewOnPage(newsMin) {
        var link = $('<a>', {
            href: sourse
        });

        var sourse = $('<span>');
        $(sourse).text(newsMin.source);
        $(info).append($(sourse));
        $(link).addClass("article first-article");
        $(mainmin).append($(link));

        var body = $('<div>').addClass("article-body");
        $(link).append($(body));

        var header = $('<h2>').addClass("article-title");
        $(body).append($(header));
        $(header).text(newsMin.header);

        var content = $('<p>').addClass("article-content");
        $(body).append($(content));
        $(content).text(newsMin.text);

        var info = $('<a>').addClass("article-info");
        var setSrcLink = newsMin.source;
        info.attr('href', setSrcLink);
        $(body).append($(info));

        var sourceBefore = $('<span>');
        $(sourceBefore).text('Читать далее: ');
        $(info).append($(sourceBefore));

        var source = $('<span>');
        $(source).text(newsMin.sourceName);
        $(info).append($(sourse));

    }

});


$(function () {
    var reviews = firebase.database().ref('Review');
    var postRew = reviews.once('value')
        .then(function (reviewAll) {
            reviewAll.forEach(function (postRew) {
                var reviewAll = postRew.val();
                addReviewOnPage(reviewAll);
            });
        })

    var reviewMain = $('<ul>').addClass("column");
    $('#reviews').append($(reviewMain));

    function addReviewOnPage(reviewAll) {
        var reviewContainer = $('<div>');
        $(reviewMain).append($(reviewContainer));

        var reviewContent = $('<p>');
        $(reviewContent).text(reviewAll.content);
        $(reviewContainer).append($(reviewContent));
        $(reviewContent).addClass("reviewContent");
        
        var reviewName = $('<p>');
        $(reviewName).text(reviewAll.name);
        $(reviewContainer).append($(reviewName));
        $(reviewName).addClass("reviewName");

    }

});