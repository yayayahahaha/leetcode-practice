// 從來沒有想過會栽在 Curry 上，要稍微調整一下解題思維了

// https://aw50zxj2awv3cg.netlify.app/infinite-currying.html
function g(num) {
  const result = function (num2) {
    return g(num2 + num)
  }
  result.valueOf = () => num

  return result
}

// console.log(g(1).valueOf())
// console.log(g(1)(2).valueOf())
// console.log(g(1)(2)(3).valueOf())
// console.log(g(1)(2)(3)(4).valueOf())

// Garena Booyah 的面試題
const add = (a = 0, b = 0) => a + b

const curry = function (fn) {
  // 中間那些換名字的宣告項可以不用寫
  return function curryAdd(num1) {
    const add = fn
    const a = num1
    return function addFive(num2) {
      const b = num2
      return fn(a, b) // result
    }
  }
}

const curryAdd = curry(add)
const addFive = curryAdd(5)
const result = addFive(3)
const result2 = addFive(4)
// console.log(result)
// console.log(result2)

function recursiveCurry(fn) {
  return function infiniteAdd(num) {
    let accum
    accum = fn(num, accum)
    stepFn.just = accum

    function stepFn(num2) {
      accum = fn(num2, accum)
      stepFn.just = accum

      return stepFn
    }

    return stepFn
  }
}

const infiniteAdd = recursiveCurry(add)
console.log(infiniteAdd(13).just)
console.log(infiniteAdd(1)(2)(3).just)
console.log(infiniteAdd(3)(4).just)
console.log(infiniteAdd(1)(2)(3)(4)(5)(6)(7)(8)(9)(10).just)

function ccc(input1) {
  let accum
  function result(input2) {
    accum = input1 + input2
    return ccc(accum)
  }
  result.valueOf = () => accum
  return result
}

console.log('result', ccc(1).valueOf())
