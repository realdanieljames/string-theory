/******************
 * YOUR CODE HERE *
 ******************/


function indexedChars (str){
  let result = '';
  for ( let i = 0; i < str.length; i ++) {
    result = result + i + str[i];
  }
  return result;
}




function exclaim(sentence) {
  let exclaimed = '';

  for (let i = 0; i < sentence.length; i++) {
    const character = sentence[i];
    if(character === '?' || character === '.') {
      exclaimed = exclaimed + '!';
    }
  
  else {
    exclaimed = exclaimed + character;
  }
  }
  return exclaimed ;
}


function repeatIt(str, max) {
  let repeated = '';
  let count = 0;
  while(count < max) {
    repeated = repeated + str;
    count = count + 1;
  }
  return repeated;
}




function truncate(str){
  if (str.length < 18) {
    return str;
  }
  let result = '';
  for(let i = 0; i < 15; i++) {
    result = result + str[i];
  }
  return result + '...';
}



function ciEmailify(name) {
  let email = '';
  for(let i = 0; i < name.length; i++) {
    if (name[i] === ' ') {
      email = email + '.';
    } else {
      email = email + name[i].toLowerCase();
    }
  }
  return email + '@codeimmersives.com'
}
const email = ciEmailify('Colin Jaffe');
email;



function reverse(str){
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i --){
    reversed = reversed + str[i];
  }
  return reversed;
}



function  onlyVowels(str) {
  const aeiou = 'aeiouAEIOU';
  let vowels = '';
  for (let i = 0; i < str.length; i ++) {
    const character = str[i];
    if (aeiou.includes(character)) {
      vowels = vowels + character;
    }
  }
  return vowels;
}


function numberedChars(str) {
  let result = '';
  for (let i = 0; i < str.length; i ++){
    result = result + '(' + (i + 1) + ')' + str[i];
  }
  return result;
}


function crazyCase(str) {
  let crazyCased = '';
  
  for(let i = 0; i < str.length; i ++) {
    if (i % 2 === 0) {
      crazyCased = crazyCased + str[i].toLowerCase()
    } else{
      crazyCased = crazyCased + str[i].toUpperCase()
    }
  }
  return crazyCased;
}


function titleCase(str) {
  let title = '';

  for (let i = 0; i < str.length; i++) {
    const character = str[i].toLowerCase();
    if (i === 0 || str[i - 1] === ' ') {
      title =  title + character.toUpperCase();
    }
    else {
      title = title + character;
    }
  }
  return title
}
console.log(titleCase('hello there how are you'))



function camelCase(str) {
  let result = '';
  for (let i = 0; i < str.length; i ++) {
    const char = str[i];
    const prev = str[i - 1];
    if (char !== ' ') {
      if(prev === ' ') {
      result = result + char.toUpperCase();
    }
    else if (i === 0) {
      result = result + char.toLowerCase();
    }
    else {
      result  =  result + char;
    }
    }
  }
  return result
}







/********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/

if (typeof indexedChars === 'undefined') {
  indexedChars = undefined;
}

if (typeof exclaim === 'undefined') {
  exclaim = undefined;
}

if (typeof repeatIt === 'undefined') {
  repeatIt = undefined;
}

if (typeof truncate === 'undefined') {
  truncate = undefined;
}

if (typeof ciEmailify === 'undefined') {
  ciEmailify = undefined;
}

if (typeof reverse === 'undefined') {
  reverse = undefined;
}

if (typeof onlyVowels === 'undefined') {
  onlyVowels = undefined;
}

if (typeof numberedChars === 'undefined') {
  numberedChars = undefined;
}

if (typeof crazyCase === 'undefined') {
  crazyCase = undefined;
}

if (typeof titleCase === 'undefined') {
  titleCase = undefined;
}

if (typeof camelCase === 'undefined') {
  camelCase = undefined;
}

if (typeof crazyCase2ReturnOfCrazyCase === 'undefined') {
  crazyCase2ReturnOfCrazyCase = undefined;
}


module.exports = {
  indexedChars,
  exclaim,
  repeatIt,
  truncate,
  ciEmailify,
  reverse,
  onlyVowels,
  numberedChars,
  crazyCase,
  titleCase,
  camelCase,
  crazyCase2ReturnOfCrazyCase,
}
