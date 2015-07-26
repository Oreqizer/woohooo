/* jshint devel:true */
'use strict';

$(function() {
  
  // VARIABLES: -----------------------------------------------------------------------
  var height,
      width,
      touch,
      active,
      win = $(window),
      doc = $(document),
      html = $('html'),
      body = $('body'),
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
      sections = $('.main-section');
  
  // FUNCTIONS: -----------------------------------------------------------------------
  function windowDimensions() {

    height = win.height();
    width = win.width();
    
  }
  
  // INIT: ----------------------------------------------------------------------------
  windowDimensions();
    
  if (html.hasClass('touch')) {
    touch = true;
  }
  
  // NAV: -----------------------------------------------------------------------------
  var navButton = $('.nav-button'),
      navItems = $('.nav-item');
  
  navButton.on('click', function() {
    nav.toggleClass('open');
  });
  
  if (touch) {
    
    nav.swipe({
      swipeLeft: function() {
        nav.removeClass('open');
      },
      excludedElements: 'button, input, select, textarea, .noSwipe'
    });
    
    html.swipe({
      swipeLeft: function() {
        nav.removeClass('open');
      },
      swipeRight: function() {
        nav.addClass('open');
      }
    });
    
  }
  
  $('.nav-anchor > a').each(function() {
    $(this).on('click', function() {
      
      var href = $.attr(this, 'href');
      TweenMax.to(root, 0.75, {
          scrollTop: $(href).offset().top,
          onComplete: function() {
            window.location.hash = href;
          }
      });
      return false;
      
    });
  });
  
  // Helper functions:
  function clearNav() {
    
    navItems.each(function() {
      $(this).removeClass('active');
    });
    
  }
  
  function tickNav(id) {
    
    if (id !== active) {
      clearNav();
      
      if (id) {
        $('.nav-' + id).addClass('active');
      }
    }
    active = id;
    
  }
  
  // RESIZE: --------------------------------------------------------------------------
  win.on('resize', function() {
    
    windowDimensions();
    
    if (width < 480 && !touch) {
      nav.removeClass('open');
    }
    
  });
  
  // SCROLL: --------------------------------------------------------------------------
  var bg = $('.content-bg');
  
  win.on('scroll', function() {
    
    var wScroll = win.scrollTop();
    
    // Anchor:
    var id = null;
    sections.each(function() {
      var self = $(this);
      if (self.offset().top - wScroll <= height/4) {
        id = self.attr('id');
      }
    });
    tickNav(id);
    
  });
  
  // desktop:
  if (!touch) {
    var docHeight = doc.height() - height;
    
    win.on('scroll', function() {
      var wScroll = win.scrollTop();
      
      // Parallax:
      bg.css({
        'transform': 'translate3d(0, ' + (wScroll/docHeight)*50 + '%, 0)'
      });
    });
    
  } else {
    bg.css({
      'transform': 'translate3d(0, ' + 25 + '%, 0)'
    });
  }
  
  // CLICK: ---------------------------------------------------------------------------
  
});