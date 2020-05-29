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


$(function () {

  var postDataRew = {
    content: null,
    name: null,
  };

  $("#reviewForm").submit(function(e) {
    e.preventDefault(); 
    fillPostDataRew();
    var rewPostKey = firebase.database().ref().child('Review').push().key;
    var updatesRew = {};
    updatesRew['/Review/' + rewPostKey] = postDataRew;
    return firebase.database().ref().update(updatesRew);
  }); 

  function fillPostDataRew() {
    postDataRew.content = $('#containerRew').val();
    postDataRew.name = $('#nameRew').val();
  };
}) 



$(function () {

  var postDataOrd = {
    name: null,
    email: null,
    comments: null,
    format: null,
    technique: null,
    date: null,
  };

  $("#orderForm").submit(function(e) {
    e.preventDefault(); 
    fillPostDataOrder();
    var ordPostKey = firebase.database().ref().child('Order').push().key;
    var updatesOrder = {};
    updatesOrder['/Order/' + ordPostKey] = postDataOrd;
    return firebase.database().ref().update(updatesOrder);
    
    $('#orderForm')[0].reset();
  }); 
$('#orderForm')[0].reset();
  function fillPostDataOrder() {
    postDataOrd.name = $('#nameOrd').val();
    postDataOrd.email = $('#loginFieldOrd').val();
    postDataOrd.comments = $('#wishOrd').val();
    postDataOrd.format = $('#formatOrd').val();
    postDataOrd.technique = $('#tehOrd').val();
    postDataOrd.date = $('#timeOrd').val();
  };  

    $('#orderForm')[0].reset();
}) 
document.getElementById('orderForm').reset()
$('#orderForm')[0].reset();



$(document).ready(function() {
  $("#submit").click(function() {
   var name = $("#name").val();
   var email = $("#email").val();
   var message = $("#message").val();
   var contact = $("#contact").val();
   $("#returnmessage").empty();
   if (name == '' || email == '' || contact == '') {
    alert("Please Fill Required Fields");
   } else {
    $.post("contact_form.php", {
     name1: name,
     email1: email,
     message1: message,
     contact1: contact
    }, function(data) {
     $("#returnmessage").append(data);
     if (data == "Your Query has been received, We will contact you soon.") {
      // $("#form")[0].reset();
      $('#form').find('form')[0].reset();
     }
    });
   }
  });
 });