var footer = $('#foot1'),topper = $('#top1');
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1200);
        return false;
      }
    }
  });
});

if(!Modernizr.touch) {
  $.stellar({verticalScrolling: false});
}
$(window).scroll(function () {

    if(!Modernizr.touch) {

      
      
   
      var diff = $('#slide2').offset().top - footer.offset().top;

      if ( diff <= 5 ) {
          footer.addClass('invisible');
          topper.removeClass('invisible');
      }
      if ( diff > 0 ) {
          footer.removeClass('invisible');
          topper.addClass('invisible'); 
      }
     

    }  
});