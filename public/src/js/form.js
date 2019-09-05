import $ from 'jquery';
$(function () {

  var postData = {
    image: null,
    header: null,
    text: null,
    source: null,
    sourceName: null
  };

  $("#contactForm").submit(function(e) {
    e.preventDefault(); 
    fillPostData();
    var newPostKey = firebase.database().ref().child('News').push().key;
    var updates = {};
    updates['/News/' + newPostKey] = postData;
    return firebase.database().ref().update(updates);
  
  }); 

  function fillPostData() {
    postData.header = $('#header').val();
    postData.text = $('#text').val();
    postData.source = $('#source').val();
    postData.sourceName = $('#sourceName').val();
  }

$("#image").change(function() {
  var file = this.files != null ? this.files[0] : null;
  var reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
    postData.image = reader.result;
  };
  reader.onerror = function (error) {
    console.log('Error: ', error);
  };
});  

})