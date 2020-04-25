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
	    $("#sound-" + $(this).data("sound"))[0].pause();
	    $("#sound-" + $(this).data("sound"))[0].play();
	  });
	$("#sound-").attr("id", "sound-0");


/* ============================== end script ================================= */
});
