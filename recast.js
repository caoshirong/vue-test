const recast = require("recast");
const code =
  `
  function add(a, b) {
    return a + b
  }
  `
const ast = recast.parse(code)
const add  = ast.program.body[0]
console.log(add)

const {variableDeclaration, variableDeclarator, functionExpression} = recast.types.builders
// 将准备好的组件置入模具，并组装回原来的ast对象。
ast.program.body[0] = variableDeclaration("const", [
  variableDeclarator(add.id, functionExpression(
    null, // Anonymize the function expression.
    add.params,
    add.body
  ))
])
//将AST对象重新转回可以阅读的代码
const output = recast.print(ast).code
console.log(output)
