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
      
      crew = $('.crew'),
      woohooo = $('.woohooo'),
      highlights = $('.highlights'),
      gallery = $('.gallery'),
      contact = $('.contact'),
      
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
      highlights: highlights.offset().top,
      gallery: gallery.offset().top,
      contact: contact.offset().top
    };
    
  }
  
  // INIT: ----------------------------------------------------------------------------
  window.viewportUnitsBuggyfill.init();
  
  fullpage.fullpage({
    anchors: ['home', 'crew', 'woohooo', 'highlights', 'gallery', 'contact'],
    menu: '.nav-list',
    loopHorizontal: false,
    slidesNavigation: true,
    touchSensitivity: 25,
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
  var navButton = $('.nav-button'),
      navAnchor = $('.nav-anchor');
  
  navButton.on('click', function() {
    nav.toggleClass('open');
  });
  
  navAnchor.on('click', function() {
    nav.removeClass('open');
  });
  
//  if (touch) {
//    
//    nav.swipe({
//      swipeLeft: function() {
//        nav.removeClass('open');
//      },
//      excludedElements: 'button, input, select, textarea, .noSwipe'
//    });
//    
//    html.swipe({
//      swipeLeft: function() {
//        nav.removeClass('open');
//      },
//      swipeRight: function() {
//        nav.addClass('open');
//      }
//    });
//    
//  }
  
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
  win.on('scroll', function() {
    
    var wScroll = win.scrollTop();
    
    checkNav(wScroll);
    overlay.fadeOut(250);
    
  });
  
  // CLICK: ---------------------------------------------------------------------------
  var members = $('.member'),
      events = $('.event'),
      articles = $('.article'),
      galleryBits = $('.gallery-bit'),
      overlay = $('.gallery-overlay'),
      openImage = null,
      oButton = $('.o-close'),
      oImage  = $('.o-image'),
      oNext  = $('.o-right'),
      oPrev  = $('.o-left');
  
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
  
  $.each(events, function() {
    $(this).on('click', function() {
      
      var clicked = this;
      $.each(events, function() {
        var self = $(this);
        if (clicked === this) {
          self.toggleClass('active');
        } else {
          self.removeClass('active');
        }
      });
      
    });
  });
  
  $.each(articles, function() {
    $(this).on('click', function() {
      
      var clicked = this;
      $.each(articles, function() {
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
      
      openImage = self;
      overlay.fadeIn();
      $.fn.fullpage.setAllowScrolling(false);
      
    });
  });
  
  oButton.on('click', function() {
    
    overlay.fadeOut(250, function() {
      $.fn.fullpage.setAllowScrolling(true);
    });
    
    openImage = null;
    
  });
  
  oNext.on('click', function() {
    
    if (openImage && openImage.next().length) {
      openImage = openImage.next();
      
      oImage.css({
        backgroundImage: openImage.css('background-image')
      });
    }
      
  });
  
  oPrev.on('click', function() {
    
    if (openImage && openImage.prev().length) {
      openImage = openImage.prev();
    
      oImage.css({
        backgroundImage: openImage.css('background-image')
      });
    }
    
  });
  
});