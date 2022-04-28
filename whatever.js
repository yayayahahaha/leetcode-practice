/**
 * 升湧題型
 * */
// start hoisting
function hoisting() {
  console.log('----------')
  console.log('hoistingQuestion')
  console.log('----------')
  var str = 5
  console.log(str)
  ;(function() {
    console.log(str)
    str = 10
    console.log(str)
  })()
  console.log(str)
}
hoisting()
// end hoisting

/**
 * setTimeout 題型
 * */
function setTimeoutQuestion() {
  console.log('----------')
  console.log('setTimeoutQuestion')
  console.log('----------')
  const list = [1,2,3]
  for (var i = 0; i < list.length; i++) {
    setTimeout(() => console.log(list[i]), list[i])
  }
}
setTimeoutQuestion()