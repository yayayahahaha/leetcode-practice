function countYourDay(list) {
  const nowInstance = new Date()
  const now = nowInstance.valueOf()
  const nowYear = nowInstance.getFullYear()
  const nowMonth = nowInstance.getMonth() + 1

  return list
    .slice()
    .map(item => Object.assign({}, item))
    .sort((a, b) => new Date(a.date).valueOf() - new Date(b.date).valueOf())
    .map(({ date, name }) => consoleDate(date, name))

  function consoleDate(date, name) {
    const dateInstance = new Date(date)
    const dateValue = dateInstance.valueOf()
    const dateYear = dateInstance.getFullYear()
    const dateMonth = dateInstance.getMonth() + 1
    const day = 1000 * 60 * 60 * 24
    const month = day * 30
    const year = month * 12

    const workingLoooong = now - dateValue
    const workingDay = _countPrecision(workingLoooong / day)
    const workingYear = Math.floor(workingDay / 365)
    let workingMonth = Math.floor(workingDay / 30) % 12
    workingMonth = workingMonth % 12

    return {
      name,
      date,
      workingDay,
      workingYear,
      workingMonth
    }
  }
  function _countPrecision(value, precision = 1) {
    const mathTime = Math.pow(10, precision)
    return (Math.round(value * mathTime) / mathTime).toFixed(precision)
  }
}

const input = [
  { name: 'FlyC', date: '2017/9/11 9:30', leave: '2021/5/5 15:35' /* 1697 天 */ },
  { name: 'Sean', date: '2019/9/10 9:30' },
  { name: 'James', date: '2019/10/2 9:30' },
  { name: 'Iris', date: '2020/3/7 9:30' },
  { name: 'Penny', date: '2017/11/13 9:30' },
  { name: 'Katherine', date: '2017/2/2 9:30' },
  { name: 'Susan', date: '2017/8/14 9:30' },
  { name: 'Harvey', date: '2018/1/2 9:30' },
  { name: 'Simon', date: '2020/1/2 9:30' },
  { name: 'Leo', date: '2017/8/7 9:30' },
  { name: 'Edward', date: '2017/9/4 9:30' },
  { name: 'Lewis', date: '2019/4/22 9:30' },
  { name: 'Norman', date: '2019/5/27 9:30' },
  { name: 'Sarah', date: '2018/7/2 9:30' },
  { name: 'Alex', date: '2016/9/1 9:30' },
  { name: 'Aaron_Yu', date: '2017/4/20 9:30' /* 這個不確定 */ },
  { name: 'Aaron_Lu', date: '2017/8/17 9:30', leave: '2020/10/1 9:30' /* 1141 */ }
]

const result = countYourDay(input)
result.forEach(info => {
  const { name, date, workingDay, workingYear, workingMonth } = info
  console.log(name)
  console.log(`到職日: ${date}`)
  console.log(`在天堂 ${workingDay} 天`)
  console.log(`約 ${workingYear} 年 又 ${workingMonth} 個月`)
  console.log('----------')
})
