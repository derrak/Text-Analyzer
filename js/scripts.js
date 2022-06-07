// Business Logic



function wordCounter(text) {
  if (text.trim().length === 0) {
    return 0;
  }
  let wordCount = 0;
  const wordArray = text.split(" ");
  wordArray.forEach(function(element) {
    if (!Number(element)) {
    wordCount++;
    }
  });
 return wordCount;
};
//let textString = "hi there another 77 19";
// wordCounter(textString);


function numberOfOccurrencesInText(searchWord, textWeWantToSearch) {
  if (textWeWantToSearch.trim().length === 0) {
    return 0;
  }
  const wordArray = textWeWantToSearch.split(" ");
  let wordCount = 0;
  wordArray.forEach(function(element) {
    if (element.toLowerCase().includes(searchWord.toLowerCase())) {
      wordCount++
      }
    });
    return wordCount;
  }


// let searchWord = "RED";
// let textWeWantToSearch = "Red! Red. I like red, don't you?";
// numberOfOccurrencesInText(searchWord,textWeWantToSearch);

