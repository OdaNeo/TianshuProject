(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{1:function(e,t,n){"use strict";n(3),n(4);var o=document.querySelector("#ts_header");o.querySelectorAll(".dropdown").forEach((function(e){var t=e.querySelector(".dropdown_layer");t.style.height="0rem",t.style.display="block";var n=null;e.addEventListener("mouseenter",(function(e){clearTimeout(n),e.stopPropagation(),o.style.backgroundColor="#ffffff",o.style.color="#242424",o.style.borderBottomColor="rgba(51, 102, 255, 0.5)",t.style.height="0rem",t.style.display="block",setTimeout((function(){"none"!==t.style.display&&(t.style.height="1.4rem")}),10)})),o.addEventListener("mouseleave",(function(e){e.stopPropagation(),o.style.backgroundColor="transparent",o.style.color="#ffffff",o.style.borderBottomColor="transparent"})),e.addEventListener("mouseleave",(function(e){e.stopPropagation(),t.style.height="0rem",n=setTimeout((function(){t.style.display="none"}),300)}))}));(new(n(0).a)).reveal(".sr-animate",{delay:0,distance:"80px",duration:600,easing:"cubic-bezier(0.5, 0, 0, 1)",opacity:0,origin:"bottom",reset:!1,viewOffset:{bottom:50}})},67:function(e,t,n){"use strict";n.r(t);n(3),n(4),n(68),n(1);var o=document.querySelector(".nav_bar"),l=o.querySelectorAll(".nav_bar_item"),s=o.querySelector(".nav_bar_bg"),i=document.querySelector(".nav_container").querySelectorAll(".nav_container_item"),r=l.length,a=null,c=null,f=0,u=null,y=!1;function d(){a=setInterval((function(){++u>=r&&(u=0),m()}),"".concat(3500))}function m(){s.style.left=l[u].offsetLeft+"px",l.forEach((function(e){e.style.color="#101426"})),setTimeout((function(){l[u].style.color="#ffffff"}),200),u>f?(i[f].style.left="-100%",i[f].addEventListener("transitionend",(function(){i.forEach((function(e,t){t!==f&&(i[t].style.display="none")}))})),i[u].style.display="block",i[u].style.transition="none",i[u].style.left="100%",setTimeout((function(){i[u].style.transition="all ".concat(500,"ms ease-in"),i[u].style.left=0}),20),f=u):(i[f].style.left="100%",i[f].addEventListener("transitionend",(function(){i.forEach((function(e,t){t!==f&&(i[t].style.display="none")}))})),i[u].style.display="block",i[u].style.transition="none",i[u].style.left="-100%",setTimeout((function(){i[u].style.transition="all ".concat(500,"ms ease-in"),i[u].style.left=0}),20),f=u)}window.addEventListener("scroll",(function(){clearTimeout(c),c=setTimeout((function(){y||document.documentElement.scrollTop>=900&&(y=!0,d())}),20)})),i[0].style.left=0,i[0].style.display="block",i[0].style.transition="all ".concat(500,"ms ease-in"),l.forEach((function(e,t){e.addEventListener("click",(function(e){e.stopPropagation(),clearInterval(a),f!==t?(u=t,d(),m()):d()}))}))},68:function(e,t,n){}},[[67,8,0]]]);