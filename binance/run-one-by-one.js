// https://aw50zxj2awv3cg.netlify.app/run-one-by-one.html
function a(next) {
  setTimeout(() => {
    console.log('a')
    next()
  }, 1000)
}
function b(next) {
  setTimeout(() => {
    console.log('b')
    next()
  }, 200)
}
function c(next) {
  setTimeout(() => {
    console.log('c')
    next()
  }, 300)
}

async function runOneByOne(funList) {
  for (let i = 0; i < funList.length; i++) {
    await new Promise(resolve => {
      const fn = funList[i]
      fn(resolve)
    })
  }
}

// should run a, b, c one by one
runOneByOne([a, b, c])
