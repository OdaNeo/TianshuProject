window.addEventListener('load', () => {
  console.log('缩放前浏览器宽度:' + window.outerWidth + 'px') // 屏幕宽度
  console.log('缩放后浏览器宽度:' + window.innerWidth + 'px') // 文档宽度，受到屏幕缩放影响
  console.log('<-------------------->')
})
window.addEventListener('resize', () => {
  console.log('缩放前浏览器宽度' + window.outerWidth + 'px') // 屏幕宽度
  console.log('缩放后浏览器宽度' + window.innerWidth + 'px') // 文档宽度，受到屏幕缩放影响
  console.log('<-------------------->')
})
