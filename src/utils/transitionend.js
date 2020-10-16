function _transitionEnd() {
  // 判断transition属性是否存在
  // 存在：空字符串
  // 不存在：undefined
  // console.log(document.body.style.transition);
  const transitionName = {
    transition: 'transitionend',
    mozTransition: 'transitionend',
    webkitTransition: 'webkitTransitionEnd',
    oTransition: 'oTransitionEnd otransitionend'
  }

  let transitionEnd = ''

  for (const name in transitionName) {
    if (document.body.style[name] !== 'undefined') {
      // 说明存在
      transitionEnd = transitionName[name]
      break
    }
  }
  // 将局部变量作为一个全局变量的属性
  window.ts = window.ts || {} // 如果存在则继续存在，不存在则创建一个空对象
  window.ts.transition = transitionEnd
}

_transitionEnd()
