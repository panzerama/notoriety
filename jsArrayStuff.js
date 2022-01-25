const interestingObject = {
  arraysForDays: [3, 5, 8, 'a', { anObjectProperty: 'a value' }, true, 9],
  oneIterator: function () {
    const collector = []
    for (let element of this.arraysForDays) {
      collector.push(element)
    }
    return collector
  },
  filterExample: function () {
    return this.arraysForDays.filter((element) => typeof element === 'number')
  },
  mapExample: function() {
    return this.arraysForDays.map(
      element => {
        if (typeof element !== 'string') {
          return element.toString()
        } else {
          return element
        }
      })
  },
  reduceExample: function () {
    const reducer = (previousValue, currentValue) => {
      return previousValue + currentValue
    }
    const filteredForNums = this.filterExample()
    // remember that functions can be parameters
    return filteredForNums.reduce(reducer)
  }
}

function makeAQueue() {
  const likeAQueue = []
  // this would through an error if we tried to replace the array
  // e.g. likeAQueue = [2,3,4] BUT
  // even though this is a constant value, we can add elements to it
  Array.from([-1, -2, 3, -4, 5, -6]).forEach((item) => { likeAQueue.push(Math.abs(item)) })
  return likeAQueue
}

module.exports = {
  interestingObject,
  makeAQueue
}
