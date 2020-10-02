$(document).ready(function(){
    // invoke the carousel
        $('#myCarousel').carousel({
          interval:6000
        });
    
    // scroll slides on mouse scroll 
    $('#myCarousel').bind('mousewheel DOMMouseScroll', function(e){
    
            if(e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
                $(this).carousel('prev');
                
                
            }
            else{
                $(this).carousel('next');
                
            }
        });
    
    //scroll slides on swipe for touch enabled devices  
         $("#myCarousel").on("touchstart", function(event){
     
            var yClick = event.originalEvent.touches[0].pageY;
            $(this).one("touchmove", function(event){
    
            var yMove = event.originalEvent.touches[0].pageY;
            if( Math.floor(yClick - yMove) > 1 ){
                $(".carousel").carousel('next');
            }
            else if( Math.floor(yClick - yMove) < -1 ){
                $(".carousel").carousel('prev');
            }
        });
        $(".carousel").on("touchend", function(){
                $(this).off("touchmove");
        });
    });
        
    });
    //animated  carousel start
    $(document).ready(function(){
    
    //to add  start animation on load for first slide 
    $(function(){
            $.fn.extend({
                animateCss: function (animationName) {
                    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
                    this.addClass('animated ' + animationName).one(animationEnd, function() {
                        $(this).removeClass(animationName);
                    });
                }
            });
                 $('.item1.active img').animateCss('slideInDown');
                 $('.item1.active h2').animateCss('zoomIn');
                 $('.item1.active p').animateCss('fadeIn');
                 
    });
        
    //to start animation on  mousescroll , click and swipe 
      $("#myCarousel").on('slide.bs.carousel', function () {
            $.fn.extend({
                animateCss: function (animationName) {
                    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
                    this.addClass('animated ' + animationName).one(animationEnd, function() {
                        $(this).removeClass(animationName);
                    });
                }
            });
        
    // add animation type  from animate.css on the element which you want to animate
    
            $('.item1 img').animateCss('slideInDown');
            $('.item1 h2').animateCss('zoomIn');
            $('.item1 p').animateCss('fadeIn');
            
            $('.item2 img').animateCss('zoomIn');
            $('.item2 h2').animateCss('swing');
            $('.item2 p').animateCss('fadeIn');
            
            $('.item3 img').animateCss('fadeInLeft');
            $('.item3 h2').animateCss('fadeInDown');
            $('.item3 p').animateCss('fadeIn');
        });
    });

    (function($) {
        //Function to animate slider captions
        function doAnimations(elems) {
          //Cache the animationend event in a variable
          var animEndEv = "webkitAnimationEnd animationend";
      
          elems.each(function() {
            var $this = $(this),
              $animationType = $this.data("animation");
            $this.addClass($animationType).one(animEndEv, function() {
              $this.removeClass($animationType);
            });
          });
        }
      
        //Variables on page load
        var $myCarousel = $("#myCarousel"),
          $firstAnimatingElems = $myCarousel
            .find(".carousel-item:first")
            .find("[data-animation ^= 'animated']");
      
        //Initialize carousel
        $myCarousel.carousel();
      
        //Animate captions in first slide on page load
        doAnimations($firstAnimatingElems);
      
        //Other slides to be animated on carousel slide event
        $myCarousel.on("slide.bs.carousel", function(e) {
          var $animatingElems = $(e.relatedTarget).find(
            "[data-animation ^= 'animated']"
          );
          doAnimations($animatingElems);
        });
      })(jQuery);


let scrollToTopBtn=document.querySelector('#top');

      //Scroll to top button

let displayScrollBtn =()=>{
  let y=window.scrollY;
    if (y > 200) {scrollToTopBtn.classList.replace("hide","show")}
    else{scrollToTopBtn.classList.replace("show","hide");}
}
window.addEventListener('scroll', displayScrollBtn);

scrollToTopBtn.addEventListener('click',function(){
window.scrollTo({
  top:0,
  left:0,
  behavior:'smooth'
})
});

// Detect request animation frame
var scroll = window.requestAnimationFrame ||
             // IE Fallback
             function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('.show-on-scroll'); 

function loop() {

    Array.prototype.forEach.call(elementsToShow, function(element){
      if (isElementInViewport(element)) {
        element.classList.add('is-visible');
      } else {
        element.classList.remove('is-visible');
      }
    });

    scroll(loop);
}

// Call the loop for the first time
loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}
