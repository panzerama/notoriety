const { SomeObjectOfImportance, Rectangle, Randomizer } = require('./jsClasses')
const { sleep } = require('./utils')

describe('JS Classes', () => {
  describe('SomeObjectOfImportance', () => {
    let subject
    let secondarySubject
  
    beforeEach(() => {
      subject = new SomeObjectOfImportance('a thing')
      secondarySubject = new SomeObjectOfImportance('another thing')
    });
  
    it('should have the initialized property', () => {
      expect(subject.aClassMethod()).toEqual('a thing')
      expect(secondarySubject.aClassMethod()).toEqual('another thing')
    });
  
    it('should return same value from all static methods', () => {
      expect(SomeObjectOfImportance.aStaticMethod()).toEqual('The same thing for every class object')
    })
  });

  describe('Randomizer', () => {
    describe('await', () => {
      let subject
  
      beforeEach(async () => {
        subject = await Randomizer.randomWordPromise()
      });
  
      it('should contain a value after awaiting', () => {
        expect(subject).not.toBeUndefined()
      });
    });

    describe('then', () => {
      it('should return a result', () => {
        Randomizer.randomWordPromise().then((word) => {
          expect(word).not.toBeUndefined()
        })
      });
    });
  });
});