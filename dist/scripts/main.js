"use strict";$(function(){function n(){a=l.height(),i=l.width()}function o(){l.scrollTop()>=a?h.fadeIn():(h.fadeOut(),h.removeClass("open"))}function t(){d.each(function(){$(this).removeClass("active")})}function e(n){n!==c&&(t(),n&&$(".nav-"+n).addClass("active")),c=n}var a,i,s,c,l=$(window),r=$(document),f=$("html"),u=$("html, body"),h=($("#home"),$("#nav")),v=($("#content"),$("#woohooo"),$("#nina"),$("#veronika"),$("#anita"),$("#silvia"),$(".home-woohooo"),$(".main-section"));n(),f.hasClass("touch")&&(s=!0);var p=$(".nav-button"),d=$(".nav-item");p.on("click",function(){h.toggleClass("open")}),s&&(h.swipe({swipeLeft:function(){h.removeClass("open")},excludedElements:"button, input, select, textarea, .noSwipe"}),f.swipe({swipeLeft:function(){h.removeClass("open")},swipeRight:function(){h.addClass("open")}})),$(".nav-anchor > a").each(function(){$(this).on("click",function(){var n=$.attr(this,"href");return TweenMax.to(u,.75,{scrollTop:$(n).offset().top,onComplete:function(){window.location.hash=n}}),!1})}),l.on("resize",function(){n(),o(),480>i&&!s&&h.removeClass("open")});var m=$(".content-bg");l.on("scroll",function(){var n=l.scrollTop();m.css({transform:"translate3d(0, -"+n/r.height()*50+"%, 0)"});var t=null;v.each(function(){var o=$(this);o.offset().top-n<=a/4&&(t=o.attr("id"))}),e(t),o()})});