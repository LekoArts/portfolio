// Time to read a text :)
import words from 'lodash/words';

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

export default timeToRead;
