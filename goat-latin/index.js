// https://leetcode.com/problems/goat-latin/
/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function (sentence) {
  const vowelStart = /^[^aeiou]/i
  const tail = /.$/
  return sentence
    .split(' ')
    .map(
      (word, index) =>
        `${word
          .replace(tail, (last, index, word) => `${last}${(word.match(vowelStart) || [''])[0]}`)
          .replace(vowelStart, '')}ma${Array(index + 1)
          .fill('a')
          .join('')}`
    )
    .join(' ')
}

console.log(toGoatLatin('I speak Goat Latin'))
console.log('Imaa peaksmaaa oatGmaaaa atinLmaaaaa')

/*console.log(
  toGoatLatin('The quick brown fox jumped over the lazy dog'),
  'heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa'
)*/
