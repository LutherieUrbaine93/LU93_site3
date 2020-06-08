jQuery(function ($) {
	"use strict";

	/* ========================================================================= */
	/*  Page Preloader
	/* ========================================================================= */

	$(window).on('load', function () {
		$('.preloader').fadeOut(500);
	});


	/* ========================================================================= */
	/*  Lazy load initialize (???)
	/* ========================================================================= */

	const observer = lozad(); // lazy loads elements with default selector as ".lozad"
	observer.observe();


	/* ========================================================================= */
	/*  Enable tooltips everywhere
	/* ========================================================================= */

	$(function () {
		$('[data-toggle="tooltip"]').tooltip()
	})
	

	/* ========================================================================= */
	/*  Lightbox Init
	/* ========================================================================= */

	$(document).on('click', '[data-toggle="lightbox"]', function(event) {
		event.preventDefault();
		$(this).ekkoLightbox();
	});
	
	
	/* ========================================================================= */
	/*  Sound effects
	/* =========================================================================  */
	
	/* === random sound- v1 & v2:
	$(".box").mouseenter(function() {
			$("#sound-" + Math.ceil(Math.random() * 7))[0].play();
	});
	

	$( document ).ready(function() {
		var sound = $("#sound-0")[0];
		$(".box").mouseenter(function() {
			sound.pause();
			sound.play();
		});
	});
===  */

	$(".box").each(function(i) {
		if (i != 0) {
			$("#sound-").clone().attr("id", "sound-" + i).appendTo($(this).parent());
		}
		$(this).data("sound", i);
	}).mouseenter(function() {
		$("#sound-" + $(this).data("sound"))[0].play();
	});
	$("#sound-").attr("id", "sound-0");


	/* ========================================================================= */
	/*  Image gallery responsive
	/* =========================================================================  */

	$(function() {
		
		var selectedClass = "";

		$(".filter").click(function() {

			selectedClass = $(this).attr("data-rel");
			$(".img-gallery").fadeTo(100, 0.1);
			$(".img-gallery div").not("."+selectedClass).fadeOut().removeClass('animation');

			setTimeout(function() {

				$("."+selectedClass).fadeIn().addClass('animation');
				$(".img-gallery").fadeTo(300, 1);

			}, 300);

		});
	});


/* ============================== end script ================================= */
});



jQuery(function ($) { /* Specific to Pages */
	"use strict";

	/* ========================================================================= */
	/*  Breadcrumbs top screen = position: fixed
	/* ===================================================================
	var brdcrmbs =  document.getElementById('breadcrumbs-nav'),
		distance = $('#breadcrumbs-nav').offset().top,
		$window = $(window);

	$window.scroll(function() {
		if ( $window.scrollTop() >= distance ) {
			brdcrmbs.classList.add("stay-top");
		} else if ( $window.scrollTop() <= distance )  {
			brdcrmbs.classList.remove("stay-top");
		}
	});====== */

	/* ========================================================================= */
	/*  Smooth scrolling using jQuery easing
	/* ========================================================================= */
	$('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
	if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		if (target.length) {
			$('html, body').animate({
			scrollTop: (target.offset().top - 70)
		}, 1000, "easeInOutExpo");
		return false;
		}
	}
	});

});

