(function($){
  $(function(){
    function resizeHead () {
      var headerContainer = $('.headContainer');
      var windowHeight = $(window).height();
      //var navHeight = $('nav').height();
      headerContainer.height(windowHeight);
    }
    resizeHead();
    $( window ).resize(function() {
      resizeHead();
    });

    $('.button-collapse').sidenav({
      menuWidth: 270, // Default is 240
      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteo
    });
    
    $('.parallax').parallax();

    $('.js-scrollTo').on('click', function() { // Au clic sur un élément
      var page = $(this).attr('href'); // Page cible
      var speed = 750; // Durée de l'animation (en ms)
      $('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
      return false;
    });

    $(document).ready(function(){
      $('.sidenav').sidenav();
      $('.sidenav a').click(function () {
        $('.sidenav').sidenav();
      })
    });
  });
})(jQuery);

