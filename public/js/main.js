!function(e){var t={};function a(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=0)}([function(e,t,a){a(1),a(2),AOS.init(),$(document).ready(function(){$(".item-order-now-btn").hover(function(){$(this).parent().addClass("hover-select")},function(){$(this).parent().removeClass("hover-select")}),$(".pizzas").addClass("active"),$(".menu-content-container").load("pizzas.html"),$(".mobile-menu").click(function(){$("nav").slideToggle(200)}),$(window).resize(function(){$(this).width()>480&&$("nav").attr("style","")}),$(window).scroll(function(){$(this).scrollTop()>500?$(".toTop").fadeIn():$(".toTop").fadeOut()})}),$(".pizzas").click(function(e){e.preventDefault(),$(this).addClass("active"),$(".salads").removeClass("active"),$(".drinks").removeClass("active"),$(".menu-content-container").load("pizzas.html")}),$(".salads").click(function(e){e.preventDefault(),$(this).addClass("active"),$(".pizzas").removeClass("active"),$(".drinks").removeClass("active"),$(".menu-content-container").load("salads.html")}),$(".drinks").click(function(e){e.preventDefault(),$(this).addClass("active"),$(".pizzas").removeClass("active"),$(".salads").removeClass("active"),$(".menu-content-container").load("drinks.html")}),$(document).ready(function(){$("a").on("click",function(e){if(""!==this.hash){e.preventDefault();var t=this.hash;$("html, body").animate({scrollTop:$(t).offset().top},400,function(){window.location.hash=t})}})})},function(e,t){$(".carousel").slick({dots:!0,arrows:!1,infinite:!0,slidesToShow:2,slidesToScroll:2,autoplay:!0,autoplaySpeed:5e3,responsive:[{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]})},function(e,t){AOS.init({disable:!1,startEvent:"DOMContentLoaded",initClassName:"aos-init",animatedClassName:"aos-animate",useClassNames:!1,disableMutationObserver:!1,debounceDelay:50,throttleDelay:99,offset:120,delay:0,duration:1500,easing:"ease",once:!0,mirror:!1,anchorPlacement:"top-bottom"}),$(".landing-section").parallax({imageSrc:"../images/headers/main_page_header.jpg"}),$(".most-popular-pizzas-section").parallax({imageSrc:"../images/main_page/table_top.jpg"}),$(".about-us-landing-section").parallax({imageSrc:"../images/headers/about_us_header.jpg"}),$(".menu-landing-section").parallax({imageSrc:"../images/headers/menu_header.jpg"}),$(".contact-us-landing-section").parallax({imageSrc:"../images/headers/contact_us_header.jpg"})}]);