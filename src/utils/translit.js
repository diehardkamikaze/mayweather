function rusToLat(str) {
  const result = [];
  let i;
  let word;

  i = 0;
  const ruslat = new Map([
    ['а', 'a'], ['б', 'b'], ['в', 'v'], ['г', 'g'], ['д', 'd'], ['е', 'e'],
    ['є', 'e'], ['ё', 'e'], ['ж', 'j'], ['з', 'z'], ['и', 'i'], ['ї', 'yi'], ['й', 'i'],
    ['к', 'k'], ['л', 'l'], ['м', 'm'], ['н', 'n'], ['о', 'o'], ['п', 'p'], ['р', 'r'],
    ['с', 's'], ['т', 't'], ['у', 'u'], ['ф', 'f'], ['х', 'h'], ['ц', 'c'], ['ч', 'ch'],
    ['ш', 'sh'], ['щ', 'shch'], ['ы', 'y'], ['э', 'e'], ['ю', 'u'], ['я', 'ya'],
  ]);

  while (i < str.length) {
    if (!(str[i] === 'ъ' || str[i] === 'ь')) {
      word = ruslat.get(str[i].toLowerCase()) || str[i];
      if (str[i] === str[i].toUpperCase()) word = word.toUpperCase();
      result.push(word);
    }
    i += 1;
  }

  return result.join('');
}

export default rusToLat;
