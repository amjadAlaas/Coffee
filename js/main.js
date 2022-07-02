$(document).ready(function () {
    'use strict';
  var windowHeight = $(window).height()
  $("#main-header").height(windowHeight);
    var loadMug = $("#mug");
    loadMug.css("opacity", "0");

    loadMug.animate({
      top:"-=120px",
      opacity: "1"
    },1500);
  var scrollNavToTop = $("#scrollNav"),
    scrollBrandToTop = $("#scrollNav .navbar-brand"),
      scrollLinkToTop = $("#scrollNav .nav-link");
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 400) {
      scrollNavToTop.css("background", "#ffffffa6");
      scrollLinkToTop.css("color", "#b68834");
      scrollBrandToTop.css("color", "#b68834");
    } 
    else{
      scrollNavToTop.css("background", "none");
     scrollLinkToTop.css("color", "#fff");
      scrollBrandToTop.css("color", "#fff");
    }
  });

  });
