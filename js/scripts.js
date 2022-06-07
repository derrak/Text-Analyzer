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

function removeBadWords(textWeWantToSearch){
  const wordArray = textWeWantToSearch.split(" "); //created array from textWeWantToSearch
  let arrayPostitionCounter = 0;
  wordArray.forEach(function(element){
    arrayPostitionCounter++;
    if ("biffaroni" === element){
      wordArray[arrayPostitionCounter-1] = "beep";
    }
    else if ("zoinks" === element){
      wordArray[arrayPostitionCounter-1] = "beep";
    }
    else if ("muppeteer" === element){
      wordArray[arrayPostitionCounter-1] = "beep";
    }
    else if("loopdaloop" === element) {
      wordArray[arrayPostitionCounter -1] = "beep";
    }
  });
  return wordArray.join(" ");
}

// let textWeWantToSearch = "this is a bad word: biffaroni it has been deleted zoinks muppeteer loopdaloop";
// removeBadWords(textWeWantToSearch);


// UI Logic

$(document).ready(function(){
  $("form#word-counter").submit(function(event){
    event.preventDefault();
    const passage = $("#text-passage").val();
    const word = $("#word").val();
    const wordCount = wordCounter(passage);
    const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
    $("#total-count").html(wordCount);
    $("#selected-count").html(occurrencesOfWord);
  });
});