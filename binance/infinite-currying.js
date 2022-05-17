// https://aw50zxj2awv3cg.netlify.app/infinite-currying.html
function g(num) {
  const result = function (num2) {
    return g(num2 + num)
  }
  result.valueOf = () => num

  return result
}

console.log(g(1).valueOf())
console.log(g(1)(2).valueOf())
console.log(g(1)(2)(3).valueOf())
console.log(g(1)(2)(3)(4).valueOf())

// Garena Booyah 的面試題
const add = (a, b) => a + b

const curry = function (fn) {
  // 中間那些換名字的宣告項可以不用寫
  return function (num1) {
    const add = fn
    const a = num1
    return function (num2) {
      const b = num2
      return fn(a, b)
    }
  }
}

const curryAdd = curry(add)
const addFive = curryAdd(5)
const result = addFive(3)

// console.log(result)

function recursiveCurry(fn) {
  let accum = 0

  function more(num) {
    accum = fn(accum, num)
    more.just = accum // 如果不要用 function 的話，要在這個階段把直重新綁到 more 上，這樣的話在外面使用的時候才會是對的
    return more
  }
  more.valueOf = () => accum // 這個的話因為在執行的時候才會去取，所以會即時 closure 去找到上面的

  return more
}

const infiniteAdd = recursiveCurry(add)

let recursiveResult = infiniteAdd(1)(2)(3).just
console.log(recursiveResult)

recursiveResult = infiniteAdd(3)(4).just
console.log(recursiveResult)

recursiveResult = infiniteAdd(1)(2)(3)(4)(5)(6)(7)(8)(9)(10).just
console.log(recursiveResult)
