//  根据pathname，设置document.title

!document.title && setTitle()

function setTitle() {
  const pathname = location.pathname
  const _path = pathname.slice(1).split('.')[0]
  let title
  switch (_path) {
    case 'index':
      title = 'Tianshu'
      break
    case 'amos':
      title = 'amos'
      break
    case 'devcenter':
      title = 'devcenter'
      break
    case 'ipss':
      title = 'ipss'
      break
    case 'shujuzt':
      title = 'shujuzt'
      break
    case 'shuzils':
      title = 'shuzils'
      break
    case 'suanfazt':
      title = 'suanfazt'
      break
    case 'zhinengyw':
      title = 'zhinengyw'
      break
    default:
      title = 'Tianshu'
  }
  document.title = title
}
