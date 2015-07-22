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
      sections = $('.main-section'),
      
      android = navigator.userAgent.match(/Android/i) && window.chrome;
  
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
  // FIX: -----------------------------------------------------------------------------
  function androidChromeFix() {

    windowDimensions();
    height += 60;

    if (width < 480 && !touch) {
      nav.removeClass('open');
    }

    nav.css({'height' : height + 'px'});
    home.css({'height' : height + 'px'});
    header.css({'height' : height/2 + 'px'});
    content.css({'min-height' : height + 'px'});
    
    checkNav();
    
  }
  
  if (android) {
    
    win.off('resize');
    androidChromeFix();
    
    screen.addEventListener('orientationchange', function() {
      root.css('z-index', 1);
      alert('here');
      androidChromeFix();
    });
    
  }
  
});