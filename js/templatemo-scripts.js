$(document).ready(function() {
  // Single Page Nav for highlighting nav items
  $("#tmMainNav").singlePageNav();

  // Carousel in Our Work section
  $(".tm-gallery").slick({
    dots: true,
    infinite: false,
    arrows: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          arrows: false,
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 991,
        settings: {
          arrows: false,
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  // Image Pop Up
  $(".tm-gallery").magnificPopup({
    delegate: "a",
    type: "image",
    gallery: { enabled: true }
  });

  // Sidebar toggle
  $(".navbar-toggler").on("click", function(e) {
    e.preventDefault();
    $(".tm-sidebar").toggleClass("show");
    $(this).toggleClass("active");
    e.stopPropagation();
  });

  // Hide sidebar when clicking outside
  $(document).on("click", function(e) {
    if (!$(e.target).closest(".tm-sidebar, .navbar-toggler").length) {
      $(".tm-sidebar").removeClass("show");
      $(".navbar-toggler").removeClass("active");
    }
  });

  // Hide sidebar when clicking on nav links
  $("#tmMainNav .nav-link").click(function() {
    $(".tm-sidebar").removeClass("show");
    $(".navbar-toggler").removeClass("active");
  });

  // Adjust parallax for mobile
  if ($(window).width() < 992) {
    $(".parallax-window").parallax("disable");
  }

  $(window).resize(function() {
    if ($(window).width() < 992) {
      $(".parallax-window").parallax("disable");
    } else {
      $(".parallax-window").parallax("enable");
    }
  });
});