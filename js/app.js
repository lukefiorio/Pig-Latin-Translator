function englishToPigLagin(word) {
  if (typeof word !== 'string') {
    console.log('Must be a string!');
    return;
  }

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

function pigLatinToEnglish(word) {
  // require a string
  if (typeof word !== 'string') {
    console.log('Must be a string!');
    return;
  }

  // require no leading space
  if (word.split(' ')[0] === '') {
    console.log(`Don't start with an empty space, please!`);
    return;
  }

  // require single word
  if (word.split(' ').length > 1) {
    console.log('One word at a time, please!');
    return;
  }

  // require a hyphen in our pig latin word
  const charArr = [...word];
  let foundHyphen = 0;
  for (let i = 0; i < charArr.length; i++) {
    if (['-'].includes(charArr[i])) {
      foundHyphen = 1;
    }
  }
  if (!foundHyphen) {
    console.log(`Not a word in pig latin! (no hyphen '-')`);
    return;
  }

  // translate to english
  const startMoveUpIndex = word.lastIndexOf('-') + 1;
  const endMoveUpIndex = word.lastIndexOf('a');
  const startEnglish = word.substr(startMoveUpIndex, endMoveUpIndex - startMoveUpIndex);
  const endEnligsh = word.substr(0, startMoveUpIndex - 1);
  const english = startEnglish + endEnligsh;

  return english;
}
