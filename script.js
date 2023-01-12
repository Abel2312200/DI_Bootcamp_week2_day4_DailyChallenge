// picking up the words
let severalWords = prompt('Please entrer some words separated by commas :');

let severalWordsArray = severalWords.split(',');

// searching index of the longest word  in the array
let indexLongestWord = 0;
for(let indexCurrent = 0; indexCurrent <  severalWordsArray.length; indexCurrent++){
    if(severalWordsArray[indexCurrent].length > severalWordsArray[indexLongestWord].length){
        indexLongestWord = indexCurrent;
    }
}

// Displaying
let lengthMaxLine = severalWordsArray[indexLongestWord].length + 4;
console.log('*'.repeat(lengthMaxLine)); // first line
for(let i = 0; i < (severalWordsArray.length) ; i++){
   console.log(`* ${severalWordsArray[i]}${' '.repeat(lengthMaxLine - severalWordsArray[i].length - 4)} *`); // displaying of words
}
console.log('*'.repeat(lengthMaxLine)); // last line