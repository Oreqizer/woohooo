"use strict";$(function(){function n(){s=r.height(),a=r.width()}function e(){r.scrollTop()>=s?d.fadeIn():(d.fadeOut(),d.removeClass("open"))}function o(){g.each(function(){$(this).removeClass("active")})}function t(n){n!==h&&(o(),n&&$(".nav-"+n).addClass("active")),h=n}function i(){n(),e(),480>a&&!c&&d.removeClass("open"),d.css({height:s+"px"}),u.css({height:s+"px"}),p.css({height:s/2+"px"}),v.css({"min-height":s+"px"})}var s,a,c,h,r=$(window),l=($(document),$("html")),f=$("html, body"),u=$("#home"),d=$("#nav"),v=$("#content"),p=($("#woohooo"),$("#nina"),$("#veronika"),$("#anita"),$("#silvia"),$(".home-woohooo")),m=$(".main-section"),w=navigator.userAgent.match(/Android/i)&&window.chrome;n(),l.hasClass("touch")&&(c=!0);var C=$(".nav-button"),g=$(".nav-item");C.on("click",function(){d.toggleClass("open")}),c&&(d.swipe({swipeLeft:function(){d.removeClass("open")},excludedElements:"button, input, select, textarea, .noSwipe"}),l.swipe({swipeLeft:function(){d.removeClass("open")},swipeRight:function(){d.addClass("open")}})),$(".nav-anchor > a").each(function(){$(this).on("click",function(){var n=$.attr(this,"href");return TweenMax.to(f,.75,{scrollTop:$(n).offset().top,onComplete:function(){window.location.hash=n}}),!1})}),r.on("resize",function(){n(),e(),480>a&&!c&&d.removeClass("open")}),r.on("scroll",function(){var n=r.scrollTop();n>s/2?p.addClass("hidden"):p.removeClass("hidden");var o=null;m.each(function(){var e=$(this);e.offset().top-n<=s/4&&(o=e.attr("id"))}),t(o),e()}),w&&(r.off("resize"),i(),screen.addEventListener("orientationchange",function(){i()})),screen.addEventListener("orientationchange",function(){l.hide(),l.show()})});