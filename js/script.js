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
  /*  Magnific popup
  /* =========================================================================  */
  $('.image-popup').magnificPopup({
    type: 'image',
    removalDelay: 160, //delay removal by X to allow out-animation
    callbacks: {
      beforeOpen: function () {
        // just a hack that adds mfp-anim class to markup
        this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
        this.st.mainClass = this.st.el.attr('data-effect');
      }
    },
    closeOnContentClick: true,
    midClick: true,
    fixedContentPos: false,
    fixedBgPos: true
  });

  /* ========================================================================= */
  /*  animation scroll js
  /* ========================================================================= */

  var html_body = $('html, body');
  $('nav a, .page-scroll').on('click', function () { //use page-scroll class in any HTML tag for scrolling
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        html_body.animate({
          scrollTop: target.offset().top
        }, 1000, 'easeInOutExpo');
        return false;
      }
    }
  });

  // easeInOutExpo Declaration
  jQuery.extend(jQuery.easing, {
    easeInOutExpo: function (x, t, b, c, d) {
      if (t === 0) {
        return b;
      }
      if (t === d) {
        return b + c;
      }
      if ((t /= d / 2) < 1) {
        return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
      }
      return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
    }
  });

  /* ========================================================================= */
  /*  counter up
  /* ========================================================================= */
  function counter() {
    var oTop;
    if ($('.count').length !== 0) {
      oTop = $('.count').offset().top - window.innerHeight;
    }
    if ($(window).scrollTop() > oTop) {
      $('.count').each(function () {
        var $this = $(this),
          countTo = $this.attr('data-count');
        $({
          countNum: $this.text()
        }).animate({
          countNum: countTo
        }, {
          duration: 1000,
          easing: 'swing',
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
          }
        });
      });
    }
  }
  $(window).on('scroll', function () {
    counter();
  });


});

  /* ========================================================================= */
  /*  wow
  /* ========================================================================= */
var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
  }
);
wow.init(); 


/* ========================================================================= */
/*  Modal Images
/* ========================================================================= */

baguetteBox.run('.lu96-gallery');


/* ========================================================================= */
/*  Bootstrap menu dropdown
/* ========================================================================= */

$(document).ready(function(){
  $(".dropdown, .btn-group").hover(function(){
      var dropdownMenu = $(this).children(".dropdown-menu");
      var dropdownItem = $(this).children(".dropdown-item");
      dropdownMenu.toggleClass("show");
      dropdownItem.toggleClass("show");
  });
}); 


/* ========================================================================= */
/*  Burger menu
/* ====================================================================

$(".mega-menu-trigger").toggle(function() {
  $(this).add("burger-active");
});

===== */
 