import $ from 'jquery';

$(document).ready(function(){
    var currentPosition = 0;
    var slideWidth = 560;
    var slides = $('.slide');
    var numberOfSlides = slides.length;
   
    $('#slidesContainer').css('overflow', 'hidden');
    slides
    .wrapAll('<div id="slideInner"></div>')
    
    .css({
      'float' : 'left',
      'width' : slideWidth
    });
    
    $('#slideInner').css('width', slideWidth * numberOfSlides);
    manageControls(currentPosition);
    
    $('.control')
    .bind('click', function(){
      currentPosition = ($(this).attr('id')=='rightControl')
      ? currentPosition+1 : currentPosition-1;
      manageControls(currentPosition);
      $('#slideInner').animate({
        'marginLeft' : slideWidth*(-currentPosition)
      });
    });
  
  var mycolslide = 1;
  setInterval(function(){
    if (mycolslide < 5) { 
      currentPosition = currentPosition+1;
      mycolslide = mycolslide + 1;
    }
    else {
      currentPosition = 0;
      mycolslide = 1;
    }
    
    manageControls(currentPosition);
    $('#slideInner').animate({
      'marginLeft' : slideWidth*(-currentPosition)
    });
  },5000)

  function manageControls(position){
    if(position==0){ $('#leftControl').hide() }
    else{ $('#leftControl').show() }
    
    if(position==numberOfSlides-1){ $('#rightControl').hide() }
    else{ $('#rightControl').show() }
  }
  
});