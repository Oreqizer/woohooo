/* jshint devel:true */
'use strict';

/* jshint ignore:start */
$(function() {
  // GLOBAL FUNCTIONS: --------------------------
  
  function getElems(array) {
    var elems = [];
    for (var i = 0; i < array.length; i++) {
      elems.push($(array[i]));
    }
    return elems;
  }
  
  // VARIABLES: -------------------------------
  var height,
      width,
      touch,
      win = $(window),
      doc = $(document),
      html = $('html'),
      root = $('html, body'),
      
      home = $('#home'),
      nav = $('#nav'),
      content = $('#content'),
      woohooo = $('.home-woohooo'),
      sections = getElems($('.main-section'));
  
  // FUNCTIONS: -------------------------
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
      touch = true;
      home.css({'height' : height + 'px'});
      woohooo.css({'height' : height/2 + 'px'});
      content.css({'min-height' : height + 'px'});
    }
  }
  
  // INIT: -----------------------
  windowDimensions();
  screenDimensions();
  
  // NAV: ----------------------------------
  var navButton = $('.nav-button'),
      navItems = getElems($('.nav-item')),
      navLinks = getElems($('.nav-item'));
  
  navButton.on("click", function() {
    nav.toggleClass('open');
  });
  
  $('.nav-anchor > a').each(function() {
    $(this).on('click', function() {
      var href = $.attr(this, 'href');
      TweenMax.to(root, .75, {
          scrollTop: $(href).offset().top,
          onComplete: function() {
            window.location.hash = href;
          }
      });
      return false;
    });
  });
  
  // Helpers:
  function checkNav() {
    if (win.scrollTop() >= height) {
      nav.fadeIn();
    } else {
      nav.fadeOut();
      nav.removeClass('open');
    }
  }
  
  function clearNav() {
    for (var i = 0; i < navItems.length; i++) {
      navItems[i].removeClass('active');
    }
  }
  
  function tickNav(i) {
    clearNav();
    navItems[i].addClass('active');
  }
  
  // RESIZE: -------------------------------
  win.on("resize", function() {
    windowDimensions();
    screenDimensions();
    checkNav();
    
    if (width < 480 && !touch) {
      nav.removeClass('open');
    }
  });
  
  // SCROLL: -------------------------------
  win.on("scroll", function() {
    var scrollTop = win.scrollTop(),
        halfHeight = height/2;
    
    // Parallax:
    if (scrollTop > halfHeight) {
      woohooo.addClass('hidden');
    } else {
      woohooo.removeClass('hidden');
    }
    
    // Anchor:
    var tick = -1;
    if (sections[1].offset().top - halfHeight >= scrollTop) tick = 0;
    else if (sections[2].offset().top - halfHeight >= scrollTop) tick = 1;
    else if (sections[3].offset().top - halfHeight >= scrollTop) tick = 2;
    else if (sections[4].offset().top - halfHeight >= scrollTop) tick = 3;
    else tick = 4;
    
    if (tick == -1) clearNav();
    else tickNav(tick);
    
    // Nav:
    checkNav();
  });
  
});
/* jshint ignore:end */