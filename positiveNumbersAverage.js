function getPositiveNumbersAverage(numbersArray) {
  const positives = numbersArray.filter(el => el > 0)
  return positives.reduce((avg, cur) => avg + cur / positives.length, 0)
}