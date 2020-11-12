const headerHTML = document.querySelector('#ts_header')
const dropdown = headerHTML.querySelectorAll('.dropdown')

dropdown.forEach(item => {
  const _layer = item.querySelector('.dropdown_layer')

  _layer.style.height = 0 + 'rem'
  _layer.style.display = 'block'

  let _timer = null

  item.addEventListener('mouseenter', e => {
    clearTimeout(_timer)
    e.stopPropagation()

    // header 背景颜色改变
    headerHTML.style.backgroundColor = '#ffffff'
    headerHTML.style.color = '#242424'
    headerHTML.style.borderBottomColor = 'rgba(51, 102, 255, 0.5)'

    // 下拉菜单动画
    _layer.style.height = 0 + 'rem'
    _layer.style.display = 'block'
    setTimeout(() => {
      if (_layer.style.display === 'none') {
        return
      }
      _layer.style.height = 8.8 + 'rem'
    }, 10)
  })

  headerHTML.addEventListener('mouseleave', e => {
    e.stopPropagation()
    // header 背景颜色改变
    headerHTML.style.backgroundColor = 'transparent'
    headerHTML.style.color = '#ffffff'
    headerHTML.style.borderBottomColor = 'transparent'
  })

  item.addEventListener('mouseleave', e => {
    e.stopPropagation()

    // 下拉菜单动画
    _layer.style.height = 0 + 'rem'

    _timer = setTimeout(() => {
      _layer.style.display = 'none'
    }, 300)
  })
})
