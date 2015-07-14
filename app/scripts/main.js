/* jshint devel:true */
'use strict';

/* jshint ignore:start */
$(function() {
  
  // Variables:
  var height,
      width,
      win = $(window),
      doc = $(document),
      html = $('html'),
      
      home = $('#home'),
      nav = $('#nav'),
      woohooo = $('#woohooo');
  
  // Helper functions:
  function windowDimensions() {
    if (html.hasClass('touch')) {
      height = window.screen.height;
      width = window.screen.width;
    } else {
      height = win.height();
      width = win.width();
    }
  }
  
  function screenDimensions() {
    if (html.hasClass('touch')) {
      home.css({'height' : window.screen.height + 'px'});
      woohooo.css({'height' : window.screen.height/2 + 'px'});
    }
  }
  
  // Initialisation:
  windowDimensions();
  screenDimensions();
  
  // Resize:
  win.on("resize", function() {
    windowDimensions();
    screenDimensions();
    
    if (width < 720) {
      nav.removeClass('open');
    }
  });
  
  // Scroll:
  win.on("scroll", function() {
    // Parallax:
    if (win.scrollTop() > height/2) {
      woohooo.addClass('hidden');
    } else {
      woohooo.removeClass('hidden');
    }
    
    // Nav:
    if (win.scrollTop() >= height) {
      nav.fadeIn();
    } else {
      nav.fadeOut();
      nav.removeClass('open');
    }
  });
  
  // Nav:
  var navButton = $('.nav-button');
  navButton.on("click", function() {
    nav.toggleClass('open');
  });
  
});
/* jshint ignore:end */