"use strict";$(function(){function o(){e=s.height(),i=s.width()}function n(){d={crew:h.offset().top,woohooo:g.offset().top,highlights:u.offset().top,gallery:v.offset().top,contact:p.offset().top}}function t(o){l.hasClass("fp-viewing-home")?(r.removeClass("open"),r.fadeOut()):r.fadeIn()}{var e,i,c,s=$(window),a=($(document),$("html")),l=$("body"),r=($("html, body"),$("#nav")),f=($("#content"),$("#fullpage")),h=($(".main-section"),$(".crew")),g=$(".woohooo"),u=$(".highlights"),v=$(".gallery"),p=$(".contact"),d={};f.hasClass("fp-responsive")}window.viewportUnitsBuggyfill.init(),f.fullpage({anchors:["home","crew","woohooo","highlights","gallery","contact"],menu:".nav-list",loopHorizontal:!1,slidesNavigation:!0,touchSensitivity:25,responsiveWidth:1080,responsiveHeight:640,onLeave:function(o,n,t){1===o&&"down"===t?r.fadeIn():2===o&&"up"===t&&r.fadeOut()}}),o(),n(),t(s.scrollTop()),a.hasClass("touch")&&(c=!0);var m=$(".nav-button"),w=$(".nav-anchor");m.on("click",function(){r.toggleClass("open")}),w.on("click",function(){r.removeClass("open")}),s.on("resize",function(){o(),n(),t(),480>i&&!c&&r.removeClass("open")}),s.on("scroll",function(){var o=s.scrollTop();t(o),I.fadeOut(250)});var k=$(".member"),C=$(".event"),b=$(".article"),y=$(".gallery-bit"),I=$(".gallery-overlay"),O=null,S=$(".o-close"),x=$(".o-image"),z=$(".o-right"),A=$(".o-left");$.each(k,function(){$(this).on("click",function(){var o=this;$.each(k,function(){var n=$(this);o===this?n.toggleClass("active"):n.removeClass("active")})})}),$.each(C,function(){$(this).on("click",function(){var o=this;$.each(C,function(){var n=$(this);o===this?n.toggleClass("active"):n.removeClass("active")})})}),$.each(b,function(){$(this).on("click",function(){var o=this;$.each(b,function(){var n=$(this);o===this?n.toggleClass("active"):n.removeClass("active")})})}),$.each(y,function(){$(this).on("click",function(){var o=$(this);x.css({backgroundImage:o.css("background-image")}),O=o,I.fadeIn(),$.fn.fullpage.setAllowScrolling(!1)})}),S.on("click",function(){I.fadeOut(250,function(){$.fn.fullpage.setAllowScrolling(!0)}),O=null}),z.on("click",function(){O&&O.next().length&&(O=O.next(),x.css({backgroundImage:O.css("background-image")}))}),A.on("click",function(){O&&O.prev().length&&(O=O.prev(),x.css({backgroundImage:O.css("background-image")}))}),I.swipe({swipeLeft:function(){A.trigger("click")},swipeRight:function(){z.trigger("click")}})});