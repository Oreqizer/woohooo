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
      
      nav = $('#nav'),
      content = $('#content'),
      fullpage = $('#fullpage'),
      sections = $('.main-section'),
      parallaxBg = $('.woohooo-img'),
      
      crew = $('.crew'),
      gallery = $('.gallery'),
      woohooo = $('.woohooo'),
      events = $('.events'),
      
      locations = {};
  
  // FUNCTIONS: -----------------------------------------------------------------------
  function windowDimensions() {

    height = win.height();
    width = win.width();
    
  }
  
  function sectionsTop() {
    
    locations = {
      crew: crew.offset().top,
      woohooo: woohooo.offset().top,
      gallery: gallery.offset().top,
      events: events.offset().top
    };
    
  }
  
  // INIT: ----------------------------------------------------------------------------
  window.viewportUnitsBuggyfill.init();
  
  fullpage.fullpage({
    anchors: ['home', 'crew', 'woohooo', 'events', 'gallery'],
    menu: '.nav-list',
    responsiveWidth: 1080,
    responsiveHeight: 640,
    onLeave: function(i, next, dir) {
      
      if (i === 1 && dir === 'down') {
        nav.fadeIn();
      } else if (i === 2 && dir === 'up') {
        nav.fadeOut();
      }
      
    }
  });
  
  var respFullpage = !fullpage.hasClass('fp-responsive');
  
  windowDimensions();
  sectionsTop();
  checkNav(win.scrollTop());
    
  if (html.hasClass('touch')) {
    touch = true;
  }
  
  // NAV: -----------------------------------------------------------------------------
  var navButton = $('.nav-button');
  
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
  
  // Helper functions:
  function checkNav(wScroll) {
    
    if (wScroll >= locations.crew) {
      nav.fadeIn();
    } else {
      nav.removeClass('open');
      nav.fadeOut();
    }
    
  }
  
  // RESIZE: --------------------------------------------------------------------------
  win.on('resize', function() {
    
    windowDimensions();
    sectionsTop();
    checkNav();
    
    if (width < 480 && !touch) {
      nav.removeClass('open');
    }
    
  });
  
  // SCROLL: --------------------------------------------------------------------------

  // Parallax:
  function parallax(wScroll) {

    var parScroll = wScroll + height;

    if (parScroll >= locations.woohooo) {
      parallaxBg.css({
        transform: 'translate3d(0, ' + (parScroll - locations.woohooo)/height*25 + '%, 0)'
      });
    }

  }
  
  function checkBg(wScroll) {
    
    if (wScroll >= locations.events) {
      parallaxBg.hide();
    } else {
      parallaxBg.show();
    }
    
  }
  
  // Event handler:
  win.on('scroll', function() {
    
    var wScroll = win.scrollTop();
    
    checkNav(wScroll);
//    if (!touch) {
//      parallax(wScroll);
//    }
//    checkBg(wScroll);
    
  });
  
  // CLICK: ---------------------------------------------------------------------------
  var members = $('.member'),
      galleryBits = $('.gallery-bit'),
      overlay = $('.gallery-overlay'),
      oButton = $('.o-close'),
      oImage  = $('.o-image');
  
  $.each(members, function() {
    $(this).on('click', function() {
      
      var clicked = this;
      $.each(members, function() {
        var self = $(this);
        if (clicked === this) {
          self.toggleClass('active');
        } else {
          self.removeClass('active');
        }
      });
      
    });
  });
  
  $.each(galleryBits, function() {
    $(this).on('click', function() {
      
      var self = $(this);
      oImage.css({
        backgroundImage: self.css('background-image')
      });
      overlay.fadeIn();
      $.fn.fullpage.setAllowScrolling(false);
      
    });
  });
  
  oButton.on('click', function() {
    
    overlay.fadeOut(250, function() {
      $.fn.fullpage.setAllowScrolling(true);
    });
    
  });
  
});