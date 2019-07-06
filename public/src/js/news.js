import jQuery from 'jquery';

jQuery(function() {
    var db = firebase.firestore();

    var divMain = document.createElement("main");

    divMain.classList.add("main", "columns");

    db.collection("News").get()
        .then(function (objNews) {
            objNews.forEach(function (doc) {
                var newsObject = doc.data();
                addNewsOnPage(newsObject);
            });
        })

    function addNewsOnPage(newsOne) {
        var divSection = document.createElement("section");
        divMain.appendChild(divSection);
        divSection.classList.add("column", "main-column");

        //divLink divP -> link p
        var divLink = document.createElement("a");
        divLink.href = 'http://google.ru';//все брать из firebase
        divLink.title = 'это ссылка';//все брать из firebase
        divLink.appendChild(document.createTextNode(''));
        divSection.appendChild(divLink);
        divLink.classList.add("article", "first-article");

        var divBody = document.createElement("div");
        divLink.appendChild(divBody);
        divBody.classList.add("article-body");

        var divH = document.createElement("h2");
        divH.innerHTML = newsOne.header;
        divBody.appendChild(divH);
        divH.classList.add("article-title");

        var divP = document.createElement("p");
        divP.innerHTML = newsOne.text;
        divBody.appendChild(divP);
        divP.classList.add("article-content");

        var divFooter = document.createElement("footer");
        divFooter.innerHTML = newsOne.source;
        divBody.appendChild(divFooter);
        divFooter.classList.add("article-info");

    }
});