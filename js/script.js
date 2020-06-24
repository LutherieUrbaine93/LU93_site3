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
	/* ========================================================================= */
	var brdcrmbs =  document.getElementById('breadcrumbs-nav'),
		distance = $('#breadcrumbs-nav').offset().top,
		$window = $(window);

	$window.scroll(function() {
		if ( $window.scrollTop() >= distance ) {
			brdcrmbs.classList.add("stay-top");
		} else if ( $window.scrollTop() <= distance )  {
			brdcrmbs.classList.remove("stay-top");
		}
	});

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

	/* ========================================================================= */
	/*  Image gallery modal
	/* ========================================================================= */
	// Get the modal
	let modal = document.getElementById("galleryModal");

	// Get the image and insert it inside the modal - use its "alt" text as a caption
	let img = document.getElementsByClassName("galleryImg");
	let modalImg = document.getElementById("img01");
	let captionText = document.getElementById("caption");

	for (let i=0; i < img.length; ++i) {
		img[i].onclick = function() {
			modal.style.display = "block";
			modalImg.src = this.src;
			captionText.innerHTML = this.alt;
		}
	};
	// Get the <span> element that closes the modal
	let span = document.getElementsByClassName("close")[0];

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
		modal.style.display = "none";
	}

	/* ========================================================================= */
	/*	For WordCloud2:
	/* ========================================================================= */

	/* Resize canva "responsively" */
	function resize(){ 
		var parentWidth = jQuery('#wc_canvas').parent().outerWidth();
		var parentHeight =  jQuery('#wc_canvas').parent().outerHeight();
		jQuery('#wc_canvas').attr('width', parentWidth * .66);
		jQuery('#wc_canvas').attr('height', parentWidth * .33);

		// draw cloud here
		WordCloud( document.getElementById('wc_canvas'), {
			list: [['observer', 3], ['écouter', 3], ['découvrir', 3], 
				['expérimenter', 2], ['récupérer', 2], ['transformer', 2],
				['concevoir', 1], ['imaginer', 1], ['jouer', 1]],
			fontFamily: 'Lora',
			fontWeight: 300,
			color: 'random-light',
			backgroundColor: '#212121',
			shape: 'square',
			shrinkToFit: true,
			origin: [parentWidth / 2, 0],

			weightFactor: function (size) {
				return size * (15 * jQuery('#wc_canvas').width() / jQuery('#wc_canvas').height());
			},


		}); // end wordcloud
	}

	$(document).ready(function(){
		resize();
		jQuery(window).on('resize', function(){                      
		    resize();
		});
	});

});

