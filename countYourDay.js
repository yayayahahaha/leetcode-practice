function countYourDay(date, name) {
  const dateValue = new Date(date).valueOf()
  const day = 1000 * 60 * 60 * 24
  const now = Date.now()

  const result = (Math.round(((now - dateValue) * 100) / day) / 100).toFixed(2)

  console.log(name, `${result} 天`)
}

countYourDay('2019/9/10 9:30', 'Sean')
countYourDay('2017/9/11 9:30', 'Flyc')
countYourDay('2019/10/2 9:30', 'James')
countYourDay('2020/3/7 9:30', 'Iris')
countYourDay('2017/11/13 9:30', 'Penny')
countYourDay('2017/2/2 9:30', 'Katherine')
