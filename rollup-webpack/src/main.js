import { post } from './util.js'
import defaultExport from './defaultexport.js'
/* import {menu} from './menu.js' */

let baz = () => {
  post()
  var x = 1
  console.log(x)
  function unused () {
    return 5
  }
  return x
}

baz()

defaultExport.say()
