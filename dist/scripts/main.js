"use strict";$(function(){function n(){s=r.height(),a=r.width()}function o(){r.scrollTop()>=s?d.fadeIn():(d.fadeOut(),d.removeClass("open"))}function e(){g.each(function(){$(this).removeClass("active")})}function t(n){n!==h&&(e(),n&&$(".nav-"+n).addClass("active")),h=n}function i(){n(),s+=60,480>a&&!c&&d.removeClass("open"),d.css({height:s+"px"}),u.css({height:s+"px"}),v.css({height:s/2+"px"}),p.css({"min-height":s+"px"}),o()}var s,a,c,h,r=$(window),l=($(document),$("html")),f=$("html, body"),u=$("#home"),d=$("#nav"),p=$("#content"),v=($("#woohooo"),$("#nina"),$("#veronika"),$("#anita"),$("#silvia"),$(".home-woohooo")),m=$(".main-section"),w=navigator.userAgent.match(/Android/i)&&window.chrome;n(),l.hasClass("touch")&&(c=!0);var C=$(".nav-button"),g=$(".nav-item");C.on("click",function(){d.toggleClass("open")}),c&&(d.swipe({swipeLeft:function(){d.removeClass("open")},excludedElements:"button, input, select, textarea, .noSwipe"}),l.swipe({swipeLeft:function(){d.removeClass("open")},swipeRight:function(){d.addClass("open")}})),$(".nav-anchor > a").each(function(){$(this).on("click",function(){var n=$.attr(this,"href");return TweenMax.to(f,.75,{scrollTop:$(n).offset().top,onComplete:function(){window.location.hash=n}}),!1})}),r.on("resize",function(){n(),o(),480>a&&!c&&d.removeClass("open")}),r.on("scroll",function(){var n=r.scrollTop();n>s/2?v.addClass("hidden"):v.removeClass("hidden");var e=null;m.each(function(){var o=$(this);o.offset().top-n<=s/4&&(e=o.attr("id"))}),t(e),o()}),w&&(r.off("resize"),i(),screen.addEventListener("orientationchange",function(){f.css("z-index",1),i()}))});