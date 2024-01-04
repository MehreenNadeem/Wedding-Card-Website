$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      dots: false
    });
  });

  function loadPreloader() {
    $("#preloader").fadeOut(2000, function () {
      console.log("fadeOUt")
      main.style.display = "block";
      loader.style.display = 'none';

    })
  }

  $('.navbar-nav .nav-link').on('click', function () {
		var toggle = $('.navbar-toggler').is(':visible');
		if (toggle) {
			$('.navbar-collapse').collapse('hide');
		}
	});
  /* ..............................................
    Fixed Menu
    ................................................. */
    
	// $(window).on('scroll', function () {
	// 	if ($(window).scrollTop() > 50) {
	// 		$('.top-header').addClass('fixed-menu');
	// 	} else {
	// 		$('.top-header').removeClass('fixed-menu');
	// 	}
	// });
	
    // preloader start

    // var loader = document.getElementById("preloader");
    // var main = document.getElementById("main");
    // $(window).on("load",function() {
    //   main.style.display = "none";
    //   setTimeout(loadPreloader, 2000);
    //   // $("main").remove();
    // })

    // $('.timeLine').timeLine({
    //   mainColor: '#890025',
    //   opacity: '0.85',
    //   lineColor: '#890025'
    // });