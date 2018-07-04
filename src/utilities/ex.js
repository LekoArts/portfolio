/**
 * Excerpt
 * @param {string} string - The first paragraph of the blogpost/project
 * @returns {string} - An excerpt (first 300 words)
 */

const ex = string => string.substring(0, 300);

module.exports = ex;
