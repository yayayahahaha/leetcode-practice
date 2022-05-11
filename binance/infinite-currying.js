// https://aw50zxj2awv3cg.netlify.app/infinite-currying.html
function g(num) {
  const result = function (num2) {
    return g(num2 + num)
  }
  result.valueOf = () => num

  return result
}

console.log(g(1) == 1)
console.log(g(1)(2) == 3)
console.log(g(1)(2)(3) == 6)
console.log(g(1)(2)(3)(4) == 10)
