import '@/styles/ipss.styl' // 页面样式引入

import '@/utils/index.js' // 公共方法引入

// 导航栏动画

const navBar = document.querySelector('.nav_bar')
const navBarItem = navBar.querySelectorAll('.nav_bar_item') // 导航栏按钮队列
const navBarBg = navBar.querySelector('.nav_bar_bg') // transition动画
const navContainer = document.querySelector('.nav_container')
const navContainerItem = navContainer.querySelectorAll('.nav_container_item')

const TRANSITION_TIME = 500
const SLIDER_TIME = 3500
const SCROLL_HEIGHT = 900
const max = navBarItem.length

let timer = null
let scrollTimer = null
let curIndex = 0
let nextIndex = null
let canSlide = false

// 滚动到指定位置，开始slide
window.addEventListener('scroll', () => {
  //  debounce
  clearTimeout(scrollTimer)

  scrollTimer = setTimeout(() => {
    if (canSlide) {
      return
    }
    const _h = document.documentElement.scrollTop
    if (_h >= SCROLL_HEIGHT) {
      canSlide = true

      handleTimer()
    }
  }, 20)
})

navContainerItem[0].style.left = 0
navContainerItem[0].style.display = 'block'
navContainerItem[0].style.transition = `all ${TRANSITION_TIME}ms ease-in`

navBarItem.forEach((item, _index) => {
  item.addEventListener('click', e => {
    e.stopPropagation()
    // 点击清除定时器
    clearInterval(timer)

    if (curIndex === _index) {
      // 重开定时器
      handleTimer()
      return // 阻止重复点击
    }

    nextIndex = _index
    // 重开定时器
    handleTimer()
    // 执行动画
    handleNav()
  })
})

// 定时器函数
function handleTimer() {
  timer = setInterval(() => {
    nextIndex++
    // 边界条件判断
    nextIndex >= max ? (nextIndex = 0) : nextIndex

    handleNav()
  }, `${SLIDER_TIME}`)
}

// Nav滑块动画
function handleNav() {
  // 背景滑块动画
  navBarBg.style.left = navBarItem[nextIndex].offsetLeft + 'px'

  // 点击文字颜色改变，有延迟
  navBarItem.forEach(_i => {
    _i.style.color = '#101426'
  })
  setTimeout(() => {
    navBarItem[nextIndex].style.color = '#ffffff'
  }, 200)

  // 向左滑动

  if (nextIndex > curIndex) {
    // 切换container

    navContainerItem[curIndex].style.left = -100 + '%'

    navContainerItem[curIndex].addEventListener('transitionend', () => {
      navContainerItem.forEach((_, _i) => {
        if (_i === curIndex) {
          return
        }
        navContainerItem[_i].style.display = 'none'
      })
    })

    // 先去掉transition，放在屏幕container右侧
    navContainerItem[nextIndex].style.display = 'block'
    navContainerItem[nextIndex].style.transition = 'none'
    navContainerItem[nextIndex].style.left = 100 + '%'

    // 异步添加transition
    setTimeout(() => {
      navContainerItem[nextIndex].style.transition = `all ${TRANSITION_TIME}ms ease-in`
      navContainerItem[nextIndex].style.left = 0
    }, 20)

    curIndex = nextIndex
  } else {
    // 向右滑动， 原理同向左

    navContainerItem[curIndex].style.left = 100 + '%'

    navContainerItem[curIndex].addEventListener('transitionend', () => {
      navContainerItem.forEach((_, _i) => {
        if (_i === curIndex) {
          return
        }
        navContainerItem[_i].style.display = 'none'
      })
    })

    navContainerItem[nextIndex].style.display = 'block'
    navContainerItem[nextIndex].style.transition = 'none'
    navContainerItem[nextIndex].style.left = -100 + '%'

    setTimeout(() => {
      navContainerItem[nextIndex].style.transition = `all ${TRANSITION_TIME}ms ease-in`
      navContainerItem[nextIndex].style.left = 0
    }, 20)

    curIndex = nextIndex
  }
}
