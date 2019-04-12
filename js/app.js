function englishToPigLagin(word) {
  //let wordArr = str.split(' ');

  let charArr = [...word];

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

console.log(englishToPigLagin('sky'));
