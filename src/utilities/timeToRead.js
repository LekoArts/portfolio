// Time to read a text :)
const words = require('lodash/words');

const timeToRead = content => {
  let TTR;
  const avgWPM = 265;
  const wordCount = words(content).length;
  TTR = Math.round(wordCount / avgWPM);
  if (TTR === 0) {
    TTR = 1;
  }
  return TTR;
};

module.exports = timeToRead;
