$(document).ready(function() {
  $("#tmMainNav").singlePageNav();

  // Sidebar toggle
  $(".navbar-toggler").on("click", function(e) {
    e.preventDefault();
    $(".tm-sidebar").addClass("show");
    $(this).hide(); // Hide the hamburger menu
    $(".close-btn").show(); // Show the close button
    e.stopPropagation();
  });

  // Close sidebar
  $(".close-btn").on("click", function(e) {
    e.preventDefault();
    $(".tm-sidebar").removeClass("show");
    $(".navbar-toggler").show(); // Show the hamburger menu
    $(this).hide(); // Hide the close button
    e.stopPropagation();
  });

  // Hide sidebar when clicking outside
  $(document).on("click", function(e) {
    if (!$(e.target).closest(".tm-sidebar, .navbar-toggler").length) {
      $(".tm-sidebar").removeClass("show");
      $(".navbar-toggler").show();
      $(".close-btn").hide();
    }
  });

  // Hide sidebar when clicking on nav links
  $("#tmMainNav .nav-link").click(function() {
    $(".tm-sidebar").removeClass("show");
    $(".navbar-toggler").show();
    $(".close-btn").hide();
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