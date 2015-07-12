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
      woohooo = $('#woohooo');
  
  // Main events:
  win.on("resize", function() {
    windowDimensions();
    screenDimensions();
  });
  
  // Parallax:
  win.on("scroll", function() {
    if (win.scrollTop() > height/2) {
      woohooo.addClass('hidden');
    } else {
      woohooo.removeClass('hidden');
    }
  });
  
  // Initialisation:
  windowDimensions();
  screenDimensions();
  
  // Helper functions:
  function windowDimensions() {
    height = win.height();
    width = win.width();
  }
  
  function screenDimensions() {
    if (html.hasClass('touch')) {
      home.css({'height' : window.screen.height + 'px'});
      woohooo.css({'height' : window.screen.height/2 + 'px'});
    }
  }
  
});
/* jshint ignore:end */