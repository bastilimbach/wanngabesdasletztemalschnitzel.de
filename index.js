var lastDateOfSchnitzel = new Date('07/30/2018')

function getDaysBetweenDates(date1, date2) {
  var oneDay = 1000 * 60 * 60 * 24;
  var date1Time = date1.getTime()
  var date2Time = date2.getTime()
  var difference = date2Time - date1Time
  return Math.round(difference / oneDay)
}

console.log(getDaysBetweenDates(lastDateOfSchnitzel, new Date()))
