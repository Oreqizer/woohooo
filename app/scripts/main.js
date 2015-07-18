/* jshint devel:false */
'use strict';

$(function() {
  // VARIABLES: -----------------------------------------------------------------------
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
      sections = $('.main-section');
  
  // FUNCTIONS: -----------------------------------------------------------------------
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
  
  // INIT: ----------------------------------------------------------------------------
  windowDimensions();
  screenDimensions();
  
  // NAV: -----------------------------------------------------------------------------
  var navButton = $('.nav-button'),
      navItems = $('.nav-item');
  
  navButton.on('click', function() {
    nav.toggleClass('open');
  });
  
  nav.on('swipeleft', function() {
    nav.removeClass('open');
  });
  
  nav.on('swiperight', function() {
    nav.addClass('open');
  });
  
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
  
  function tickNav(id) {
    clearNav();
    if (id) {
      $('.nav-' + id).addClass('active');
    }
  }
  
  // RESIZE: --------------------------------------------------------------------------
  win.on('resize', function() {
    windowDimensions();
    screenDimensions();
    checkNav();
    
    if (width < 480 && !touch) {
      nav.removeClass('open');
    }
  });
  
  // SCROLL: --------------------------------------------------------------------------
  win.on('scroll', function() {
    var scrollTop = win.scrollTop();
    
    // Parallax:
    if (scrollTop > height/2) {
      header.addClass('hidden');
    } else {
      header.removeClass('hidden');
    }
    
    // Anchor:
    var id = null;
    sections.each(function() {
      var self = $(this);
      if (self.offset().top - scrollTop <= height/4) {
        id = self.attr('id');
      }
    });
    
    tickNav(id);
    
    // Nav:
    checkNav();
  });
  
});