// this is the id of the form
import $ from 'jquery';
$("#contactForm").submit(function(e) {

    e.preventDefault(); // avoid to execute the actual submit of the form.
 
    $(function writeNewPost(a, b, c, d) {
    // A post entry.
    var img = $('#image').val();
    var h = $('#header').val();
    var txt = $('#text').val();
    var a = $('#source').val();

    var postData = {
      image: img,
      header: h,
      text: txt,
      source: a,
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

  var hm = $('#headerm').val();
  var txtm = $('#textm').val();


  var postDatamin = {
    header: hm,
    text: txtm,
 };

  // Get a key for a new Post.
  var newPostKeymin = firebase.database().ref().child('Newsmin').push().key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  var updatesm = {};
  updatesm['/Newsmin/' + newPostKeymin] = postDatamin;


  return firebase.database().ref().update(updatesm);
});
});