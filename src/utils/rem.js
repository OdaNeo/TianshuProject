var rem = function () {
  function a() {
    var b = document.documentElement.clientWidth || document.body.clientWidth
    var c = (b / 1903) * 100
    document.querySelector('html').style.fontSize = c + 'px'
  }
  // 增加了html完全加载、手机横屏事件的监听
  window.addEventListener('resize', a, false)
  document.addEventListener('DOMContentLoaded', a, false)
}
rem()
