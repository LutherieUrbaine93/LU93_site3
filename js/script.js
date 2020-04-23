jQuery(function ($) {
  "use strict";

  /* ========================================================================= */
  /*  Page Preloader
  /* ========================================================================= */

  $(window).on('load', function () {
    $('.preloader').fadeOut(500);
  });


  // lazy load initialize
  const observer = lozad(); // lazy loads elements with default selector as ".lozad"
  observer.observe();



  /* ========================================================================= */
  /*  Sound effects
  /* =========================================================================  */

  $(".box").mouseenter(function() {
      $("#sound-" + Math.ceil(Math.random() * 7))[0].play();
  });




/* ============================== end script ================================= */
});
