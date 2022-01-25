const { interestingObject, makeAQueue, baseObject } = require('./jsArrayStuff');

describe('Array methods', () => {
  const expectedFilterExample = [3, 5, 8, 9];
  const expectedMapExample = ['3', '5', '8', 'a', '[object Object]', 'true', '9'];
  it('should behave in the expected manner', () => {
    expect(interestingObject.filterExample()).toEqual(expectedFilterExample);
    expect(interestingObject.mapExample()).toEqual(expectedMapExample);
    expect(interestingObject.reduceExample()).toEqual(25)
  });
});

describe('Arrays like queues', () => {
  const aQueue = makeAQueue()
  let result

  beforeEach(() => {
    result = []
    result.push(aQueue.shift())
    result.push(aQueue.shift())
    result.push(aQueue.shift())
  });

  it('should populate result correctly and modify the queue', () => {
    expect(result).toEqual([1, 2, 3])
    expect(aQueue).toEqual([4,5,6])
  });
});
