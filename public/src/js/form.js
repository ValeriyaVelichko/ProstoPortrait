// this is the id of the form
import $ from 'jquery';
$("#contactForm").submit(function(e) {

    e.preventDefault(); // avoid to execute the actual submit of the form.
 
    $(function writeNewPost(img, h, txt, a) {
    // A post entry.
    var img = $('#image').val();
    var h = $('#header').val();
    var txt = $('#text').val();
    var a = $('#source').val();
    var span = $('#sourceName').val();
    var postData = {
      image: img,
      header: h,
      text: txt,
      source: a,
      sourceName: span
    };
    // Get a key for a new Post.
    var newPostKey = firebase.database().ref().child('News').push().key;
    // Write the new post's data simultaneously in the posts list and the user's post list.
    var updates = {};
    updates['/News/' + newPostKey] = postData;
    return firebase.database().ref().update(updates);
  });
});
$("#contactFormmini").submit(function(e) {

  e.preventDefault(); // avoid to execute the actual submit of the form.

  $(function writeNewPostmini(a, b, c, d) {
  // A post entry.
  var hmin = $('#headermin').val();
  var txtmin = $('#textmin').val();
  var amin = $('#sourcemin').val();
  var spanmin = $('#sourceNamemin').val();
  var postDatamin = {
    header: hmin,
    text: txtmin,
    source: amin,
    sourceName: spanmin
 };
  // Get a key for a new Post.
  var newPostKeymin = firebase.database().ref().child('Newsmin').push().key;
  // Write the new post's data simultaneously in the posts list and the user's post list.
  var updatesmin = {};
  updatesmin['/Newsmin/' + newPostKeymin] = postDatamin;
  return firebase.database().ref().update(updatesmin);
});
});