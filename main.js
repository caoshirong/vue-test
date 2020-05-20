/* rollup index.js --file bundle.js */
/* rollup -c rollup.config.js --watch */
/* ********************************* */

/* function a() {
  alert('a')
  if (false) {
    window.console.log('这行代码不会输出')
  }
}
function b() {
  alert('b')
}
a() */

/* ********************************* */

/* let a =() => {
  let aa = 2
  window.console.log(aa)
  function unused() {
    return 'ttt'
  }
  return aa
  let bb = aa + 'eee'
  return bb
}
let b = () => {
  alert('b')
}
a() */

/* ********************************* */

/* 依赖了某个模块，但其实只使用其中的某些功能，删除没有使用的代码 */
/* import { fixZero } from './js/utils'
window.console.log(fixZero()) */

/* ********************************* */

import foo from './js/foo.js'
export default function () {
  console.log(foo)
}
