import ScrollReveal from 'scrollreveal'

const sr = new ScrollReveal()
const op = {
  delay: 0,
  distance: '80px',
  duration: 600,
  easing: 'cubic-bezier(0.5, 0, 0, 1)',
  opacity: 0,
  origin: 'bottom',
  reset: false,
  viewOffset: {
    bottom: 50
  }
}

// 带有class animate的元素都会添加滚动特效
sr.reveal('.sr-animate', op)
