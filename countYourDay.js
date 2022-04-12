function countYourDay(list) {
  list
    .slice()
    .map(item => Object.assign({}, item))
    .sort((a, b) => new Date(a.date).valueOf() - new Date(b.date).valueOf())
    .forEach(({ date, name }) => consoleDate(date, name))

  function consoleDate(date, name) {
    const dateValue = new Date(date).valueOf()
    const day = 1000 * 60 * 60 * 24
    const now = Date.now()

    const workingLoooong = (Math.round(((now - dateValue) * 10) / day) / 10).toFixed(1)
    console.log(`${name}: ${workingLoooong} 天`)
  }
}

const input = [
  { name: 'Sean', date: '2019/9/10 9:30' },
  { name: 'Flyc', date: '2017/9/11 9:30' },
  { name: 'James', date: '2019/10/2 9:30' },
  { name: 'Iris', date: '2020/3/7 9:30' },
  { name: 'Penny', date: '2017/11/13 9:30' },
  { name: 'Katherine', date: '2017/2/2 9:30' }
]

countYourDay(input)
