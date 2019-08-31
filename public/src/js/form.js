import $ from 'jquery';
$("#contactForm").submit(function(e) {
  e.preventDefault(); 
 
  $(function writeNewPost(newsImage, newsHeader, newsContent, newsSourse, newsSourseName) {
    var newsImage = $('#image').val();
    var newsHeader = $('#header').val();
    var newsContent = $('#text').val();
    var newsSourse = $('#source').val();
    var newsSourseName = $('#sourceName').val();
    var postData = {
      image: newsImage,
      header: newsHeader,
      text: newsContent,
      source: newsSourse,
      sourceName: newsSourseName
    };

    var newPostKey = firebase.database().ref().child('News').push().key;
    var updates = {};
    updates['/News/' + newPostKey] = postData;
    return firebase.database().ref().update(updates);
  });
});

$("#contactFormmini").submit(function(e) {
  e.preventDefault(); 

  $(function writeNewPostmini(newsHeaderMin, newsContentMin, newsSourseMin, newsSourseNameMin) {
    var newsHeaderMin = $('#headermin').val();
    var newsContentMin = $('#textmin').val();
    var newsSourseMin = $('#sourcemin').val();
    var newsSourseNameMin = $('#sourceNamemin').val();
    var postDatamin = {
      header: newsHeaderMin,
      text: newsContentMin,
      source: newsSourseMin,
      sourceName: newsSourseNameMin
    };
    var newPostKeymin = firebase.database().ref().child('Newsmin').push().key;
    var updatesmin = {};
    updatesmin['/Newsmin/' + newPostKeymin] = postDatamin;
    return firebase.database().ref().update(updatesmin);
  });
});