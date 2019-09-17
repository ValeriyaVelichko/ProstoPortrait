import $ from 'jquery';
$(function () {

  var postData = {
    image: null,
    header: null,
    text: null,
    source: null,
    sourceName: null
  };

  $("#newsForm").submit(function(e) {
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
  };

  $("#image").change(function() {
    var file = this.files != null ? this.files[0] : null;
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      postData.image = reader.result;
      var img = $("#output"); 
      var setSrc = postData.image;
      img.attr('src', setSrc); 
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    }; 
  });  
});  

$(function () {

  var postData = {
    image: null,
    header: null,
    text: null,
    source: null,
    sourceName: null
  };

  $("#newsFormMin").submit(function(e) {
    e.preventDefault(); 
    fillPostData();
    var newPostKey = firebase.database().ref().child('Newsmin').push().key;
    var updates = {};
    updates['/Newsmin/' + newPostKey] = postData;
    return firebase.database().ref().update(updates);
  }); 

  function fillPostData() {
    postData.header = $('#headerMin').val();
    postData.text = $('#textMin').val();
    postData.source = $('#sourceMin').val();
    postData.sourceName = $('#sourceNameMin').val();
  };
}) 