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
	/* === for random played sound-:
	$(".box").mouseenter(function() {
			$("#sound-" + Math.ceil(Math.random() * 7))[0].play();
	}); ===  */
	
	var sound = $("#sound-")[0];
	$(".box").mouseenter(function() {
		sound.pause();
		sound.play();
	});


/* ============================== end script ================================= */
});
