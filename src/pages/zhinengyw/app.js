import 'normalize.css/normalize.css' // 抹平浏览器差异

import '@/styles/zhinengyw.styl' // 页面样式引入

import '@/utils/index.js' // 公共方法引入

const sectionJianhua = document.querySelector('.section_jianhua')

const rightContainer = sectionJianhua.querySelectorAll('.right_container')

// 鼠标事件
rightContainer.forEach(item => {
  const _right = item.querySelector('.right')
  const _right_shadow = item.querySelector('.right_shadow')
  item.addEventListener('mouseenter', e => {
    e.stopPropagation()
    _right.style.display = 'none'
    _right_shadow.style.display = 'block'
  })
  item.addEventListener('mouseleave', e => {
    e.stopPropagation()
    _right.style.display = 'flex'
    _right_shadow.style.display = 'none'
  })
})
