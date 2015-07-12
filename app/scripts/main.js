/* jshint devel:true */
'use strict';

/* jshint ignore:start */
$(function() {
  
  // Variables:
  var height,
      width,
      win = $(window),
      doc = $(document),
      
      woohooo = $('#woohooo');
  
  // Main events:
  win.on("resize", function() {
    windowDimensions();
  });
  
  // Parallax:
  win.on("scroll", function() {
    if (doc.scrollTop() >= height/2) {
      woohooo.hide();
    } else {
      woohooo.show();
    }
  });
  
  // Initialisation:
  windowDimensions();
  
  // Helper functions:
  function windowDimensions() {
    height = win.height();
    width = win.width();
    console.log (height + ', ' + width);
  }
  
});
/* jshint ignore:end */