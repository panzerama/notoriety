describe('Object mutability', () => {
  const baseObject = { first: 1, second: 'two' }
  let mutableObject
  let actuallyNewObject

  beforeEach(() => {
    mutableObject = baseObject
    actuallyNewObject = { ...baseObject }
    mutableObject.third = 'something'
  });

  it('adding a property to an object reference mutates the original', () => {
    expect(mutableObject.first).toEqual(1)
    expect(baseObject.third).toEqual('something')
  });
});

describe('Object creation with spread', () => {
  const baseObject = { first: 1, second: 'two' }
  let actuallyNewObject

  beforeEach(() => {
    actuallyNewObject = { ...baseObject }
    baseObject.third = 'another'
  });

  it('the object created with spread doesnt change', () => {
    expect(actuallyNewObject.third).toBeUndefined()
  });
});

describe('Context and binding', () => {
  const anInterestingObject = {
    contextualArray: [1, 2, 3, 4, 5],
    reducerExample: function () {
      return this.contextualArray.reduce((previous, current) => {
        return previous * current
      })
    }
  }
  const anotherContext = {
    contextualArray: [9,8,7,6]
  }
  let firstResult
  let secondResult

  beforeEach(() => {
    firstResult = anInterestingObject.reducerExample();
    const unboundFunction = anInterestingObject.reducerExample;
    const boundFunc = unboundFunction.bind(anotherContext)
    secondResult = boundFunc()
  });

  it('should return different results based on context', () => {
    expect(firstResult).toEqual(120)
    expect(secondResult).toEqual(3024)
  });
});