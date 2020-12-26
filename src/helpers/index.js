export const getLetterMatchCount = (guessedWord, secretWord) => {
  //set method - store unique values
  const secretWordSet = new Set(secretWord.split(""));
  const guessedWordSet = new Set(guessedWord.split(""));
  const secretWordArray = Array.from(secretWordSet);
  const guessedWordArray = Array.from(guessedWordSet);
  let counts = 0;

  for (let i = 0; i < guessedWordArray.length; i++) {
    if (secretWordArray.indexOf(guessedWordArray[i]) > -1) {
      counts++;
    }
  }
  return counts;
};
