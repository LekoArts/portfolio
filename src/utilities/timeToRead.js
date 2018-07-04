const words = require('lodash/words');

/**
 * timeToRead - Gives the amount of time (in minutes) to read a text at average speed
 * @param content
 * @returns {number} - Time in minutes
 */

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
