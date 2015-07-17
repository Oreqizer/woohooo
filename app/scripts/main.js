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
      woohooo = $('#woohooo'),
      nina = $('#nina'),
      veronika = $('#veronika'),
      anita = $('#anita'),
      silvia = $('#silvia'),
      
      header = $('.home-woohooo'),
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
      header.css({'height' : height/2 + 'px'});
      content.css({'min-height' : height + 'px'});
    }
  }
  
  // INIT: -----------------------
  windowDimensions();
  screenDimensions();
  
  // NAV: ----------------------------------
  var navButton = $('.nav-button'),
      navItems = $('.nav-item');
  
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
    navItems.each(function() {
      $(this).removeClass('active');
    });
  }
  
  function tickNav(elem) {
    clearNav();
    $(elem).addClass('active');
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
    var scrollTop = win.scrollTop();
    
    // Parallax:
    if (scrollTop > height/2) {
      header.addClass('hidden');
    } else {
      header.removeClass('hidden');
    }
    
    // Anchor:
    if (scrollTop + height/4 >= silvia.offset().top) tickNav('.nav-silvia');
    else if (scrollTop + height/4 >= anita.offset().top) tickNav('.nav-anita');
    else if (scrollTop + height/4 >= veronika.offset().top) tickNav('.nav-veronika');
    else if (scrollTop + height/4 >= nina.offset().top) tickNav('.nav-nina');
    else if (scrollTop + height/4 >= woohooo.offset().top) tickNav('.nav-woohooo');
    else clearNav();
    
    // Nav:
    checkNav();
  });
  
});
/* jshint ignore:end */