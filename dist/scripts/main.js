"use strict";$(function(){function n(){r.hasClass("touch")?(a=window.screen.height,s=window.screen.width):(a=h.height(),s=h.width())}function o(){c=!0}function e(){h.scrollTop()>=a?f.fadeIn():(f.fadeOut(),f.removeClass("open"))}function t(){w.each(function(){$(this).removeClass("active")})}function i(n){n!==l&&(t(),n&&$(".nav-"+n).addClass("active")),l=n}var a,s,c,l,h=$(window),r=($(document),$("html")),u=$("html, body"),f=($("#home"),$("#nav")),d=($("#content"),$("#woohooo"),$("#nina"),$("#veronika"),$("#anita"),$("#silvia"),$(".home-woohooo")),v=$(".main-section");n(),o();var p=$(".nav-button"),w=$(".nav-item");p.on("click",function(){f.toggleClass("open")}),c&&(f.swipe({swipeLeft:function(){f.removeClass("open")},excludedElements:"button, input, select, textarea, .noSwipe"}),r.swipe({swipeLeft:function(){f.removeClass("open")},swipeRight:function(){f.addClass("open")}})),$(".nav-anchor > a").each(function(){$(this).on("click",function(){var n=$.attr(this,"href");return TweenMax.to(u,.75,{scrollTop:$(n).offset().top,onComplete:function(){window.location.hash=n}}),!1})}),h.on("resize",function(){n(),o(),e(),480>s&&!c&&f.removeClass("open")}),h.on("scroll",function(){var n=h.scrollTop();n>a/2?d.addClass("hidden"):d.removeClass("hidden");var o=null;v.each(function(){var e=$(this);e.offset().top-n<=a/4&&(o=e.attr("id"))}),i(o),e()})});