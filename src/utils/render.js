// 引入公共组件，挂载到对应的dom元素上
const headerHTML = document.querySelector('#ts_header')
const footerHTML = document.querySelector('#ts_footer')

headerHTML.innerHTML = `<h1 class="logo">天枢<a href="./" title="天枢平台"></a></h1>
                        <div class="nav_item_tszj dropdown">
                            <div class="dropdown_btn item_text">天枢组件</div>
                            <ol class="dropdown_layer">
                                <li class="dropdown_item"><a href="./shuzils.html" title="数字化运行平台">数字化运行平台-DRP</a></li>
                                <li class="dropdown_item"><a href="./shujuzt.html" title="数据中台">数据中台-URDMP</a></li>
                                <li class="dropdown_item"><a href="./suanfazt.html" title="算法中台">算法中台-ALMP</a></li>
                            </ol>
                        </div>
                            <div class="nav_item_jjfa dropdown">
                            <div class="dropdown_btn item_text">解决方案</div>
                            <ol class="dropdown_layer">
                                <li class="dropdown_item"><a href="./zhinengyw.html" title="智能运维">基于天枢的智能运维解决方案</a></li>
                                <li class="dropdown_item"><a href="./amos.html" title="AMOS">智能运营管理系统解决方案-AMOS</a></li>
                                <li class="dropdown_item"><a href="./ipss.html" title="IPSS">基于天枢的乘客信息服务解决方案-IPSS</a></li>
                            </ol>
                        </div>
                        <div class="nav_item_kkzzx">
                            <a class="item_text" href="./devcenter.html" title="开发者中心">开发者中心</a>
                        </div>`
footerHTML.innerHTML = `<h1 class="footer_logo">天枢</h1>
                        <div class="footer_platform">
                            <h3>平台相关</h3>
                            <h5>平台开发使用规范</h5>
                            <h5>测试与合作申请</h5>
                            <h5>手册下载</h5>
                        </div>
                        <div class="footer_about">
                            <h3>相关网站</h3>
                            <h5>交控科技</h5>
                        </div>
                        <div class="footer_connect">
                            <p>联系我们：xxx@bj-tct.com</p>
                            <div class="footer_connect_co"><span class="exp_1">Copyright 2020 - TCT</span><span>由深信服科技提供计算服务</span></div>
                        </div>`
