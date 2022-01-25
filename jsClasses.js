class SomeObjectOfImportance {
  constructor(aProperty) {
    this.memberProperty = aProperty;
  }

  aClassMethod() {
    return this.memberProperty;
  }

  static aStaticMethod() {
    return 'The same thing for every class object';
  }
}

class Rectangle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  print() {
    console.log(`x ${this.x} | y ${this.y}`); // Template string
  }

  exportRectangle() {
    return { x: this.x, y: this.y };
  }

  fromRectangle(otherRectangle) {
    const { x, y } = otherRectangle.exportRectangle();
    this.x = x;
    this.y = y;
  }
}

const axios = require('axios');

class Randomizer {
  static async randomWordPromise() {
    const options = {
      method: 'GET',
      url: 'https://wordsapiv1.p.rapidapi.com/words/?random=true',
      headers: {
        'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com',
        'x-rapidapi-key': 'your-api-key',
      },
    }
    try {
      const response = await axios.request(options);
      const randomWord = response.data.word
      console.log('returned ', randomWord)
      return randomWord;
    } catch (error) {
      console.log(`an error occured ${error}`);
    } finally {
      console.log('this will always execute after the above blocks');
    }
  }
}

module.exports = { SomeObjectOfImportance, Randomizer };
