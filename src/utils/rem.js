function _rem() {
  // var resizeEvent = 'orientationchange' in window ? 'orientationchange' : 'resize'
  function a() {
    var b = document.documentElement.clientWidth || document.body.clientWidth

    var c = (b / 1920) * 16

    // c = Math.floor(c * 10) / 10
    c = c.toFixed(1)

    document.querySelector('html').style.fontSize = c + 'px'
  }
  window.addEventListener('resize', a, false)
  document.addEventListener('DOMContentLoaded', a, false)
}

_rem()
