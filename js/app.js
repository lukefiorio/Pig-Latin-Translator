function englishToPigLagin(word) {
  if (word.split(' ')[0] === '') {
    console.log(`Don't start with an empty space, please!`);
    return;
  }

  if (word.split(' ').length > 1) {
    console.log('One word at a time, please!');
    return;
  }

  let charArr = [...word];
  let forbiddenChars = [
    ',',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0',
    '-',
    '*',
    '+',
    '/',
    '(',
    ')',
    '[',
    ']',
    ':',
  ];
  if (forbiddenChars.includes(charArr[0])) {
    console.log('Start with a letter, please!');
    return;
  }

  // first char is vowel
  if (['a', 'e', 'i', 'o', 'u'].includes(charArr[0].toLowerCase())) {
    return `${word}-ay`;
    //first char is not vowel
  } else {
    // loop through characters & store consonants until we find a vowel;
    let foundVowel = 0;
    let strToMove = '';
    let char = 0;
    while (foundVowel === 0) {
      if (!['a', 'e', 'i', 'o', 'u', 'y'].includes(charArr[char].toLowerCase())) {
        strToMove += charArr[char];
        char++;
      } else {
        foundVowel = 1;
      }
    }
    charArr.splice(0, strToMove.length);
    charArr.push(`-${strToMove}ay`);
    return charArr.join('');
  }
}
