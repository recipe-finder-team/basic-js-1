const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
   let obj = {};
   let str = "";
  for (let i = 0; i < domains.length; i++) {
    const array = domains[i].split(".").reverse();
    
   
    for (let j = 0; j < array.length; j++) {
      str = str + "." + array[j];
      if (obj[str]) {
        obj[str]++;
      } else {
        obg[str] = 1;
      }
    }
  }
  return obj;
}

module.exports = {
  getDNSStats,
};
