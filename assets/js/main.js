(function($){
  $(function(){
    function resizeHead () {
      var headerContainer = $('.headContainer');
      var windowHeight = $(window).height();
      var navHeight = $('nav').height();
      headerContainer.height(windowHeight - navHeight);
    }
    resizeHead();
    $( window ).resize(function() {
      resizeHead();
    });

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

    $('.js-scrollTo').on('click', function() { // Au clic sur un élément
      var page = $(this).attr('href'); // Page cible
      var speed = 750; // Durée de l'animation (en ms)
      $('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
      return false;
    });
  });
})(jQuery);

