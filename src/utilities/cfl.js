/**
 * Capitalize the first letter in a string
 * @param {string} string - The text you want to be capitalized
 * @returns {string}
 */

const cfl = string => string.charAt(0).toUpperCase() + string.slice(1);

module.exports = cfl;
