(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{3:function(e,t,n){"use strict";n(34);!function(){function e(){var e=(document.documentElement.clientWidth||document.body.clientWidth)/1920*50;e=e.toFixed(1),document.querySelector("html").style.fontSize=e+"px"}window.addEventListener("resize",e,!1),document.addEventListener("DOMContentLoaded",e,!1)}();n(56),n(13),n(14);var o=document.querySelector("#ts_header");o.querySelectorAll(".dropdown").forEach((function(e){var t=e.querySelector(".dropdown_layer");t.style.height="0rem",t.style.display="block";var n=null;e.addEventListener("mouseenter",(function(e){clearTimeout(n),e.stopPropagation(),o.style.backgroundColor="#ffffff",o.style.color="#242424",o.style.borderBottomColor="rgba(51, 102, 255, 0.5)",t.style.height="0rem",t.style.display="block",setTimeout((function(){"none"!==t.style.display&&(t.style.height="2.8rem")}),10)})),o.addEventListener("mouseleave",(function(e){e.stopPropagation(),o.style.backgroundColor="transparent",o.style.color="#ffffff",o.style.borderBottomColor="transparent"})),e.addEventListener("mouseleave",(function(e){e.stopPropagation(),t.style.height="0rem",n=setTimeout((function(){t.style.display="none"}),300)}))}));(new(n(31).a)).reveal(".sr-animate",{delay:0,distance:"80px",duration:600,easing:"cubic-bezier(0.5, 0, 0, 1)",opacity:0,origin:"bottom",reset:!1,viewOffset:{bottom:150}})},56:function(e,t){var n=document.querySelector("#ts_header"),o=document.querySelector("#ts_footer");n.innerHTML='<h1 class="logo">天枢<a href="./" title="天枢平台"></a></h1>\n                        <div class="nav_item_tszj dropdown">\n                            <div class="dropdown_btn item_text">天枢组件</div>\n                            <ol class="dropdown_layer">\n                                <li class="dropdown_item"><a href="./shuzils.html" title="数字化运行平台">数字化运行平台-DRP</a></li>\n                                <li class="dropdown_item"><a href="./shujuzt.html" title="数据中台">数据中台-URDMP</a></li>\n                                <li class="dropdown_item"><a href="./suanfazt.html" title="算法中台">算法中台-ALMP</a></li>\n                            </ol>\n                        </div>\n                            <div class="nav_item_jjfa dropdown">\n                            <div class="dropdown_btn item_text">解决方案</div>\n                            <ol class="dropdown_layer">\n                                <li class="dropdown_item"><a href="./zhinengyw.html" title="智能运维">基于天枢的智能运维解决方案</a></li>\n                                <li class="dropdown_item"><a href="./amos.html" title="AMOS">智能运营管理系统解决方案-AMOS</a></li>\n                                <li class="dropdown_item"><a href="./ipss.html" title="IPSS">基于天枢的乘客信息服务解决方案-IPSS</a></li>\n                            </ol>\n                        </div>\n                        <div class="nav_item_kkzzx">\n                            <a class="item_text" href="./devcenter.html" title="开发者中心">开发者中心</a>\n                        </div>',o.innerHTML='<h1 class="footer_logo">天枢</h1>\n                        <div class="footer_platform">\n                            <h3>平台相关</h3>\n                            <h5>平台开发使用规范</h5>\n                            <h5>测试与合作申请</h5>\n                            <h5>手册下载</h5>\n                        </div>\n                        <div class="footer_about">\n                            <h3>相关网站</h3>\n                            <h5>交控科技</h5>\n                        </div>\n                        <div class="footer_connect">\n                            <p>联系我们：xxx@bj-tct.com</p>\n                            <div class="footer_connect_co"><span class="exp_1">Copyright 2020 - TCT</span><span>由深信服科技提供计算服务</span></div>\n                        </div>'}}]);