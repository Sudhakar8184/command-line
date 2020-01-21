const Dictionary = require("../controllers/dictionary.js");

module.exports = function(input) {
  input = input.split(" ");
  let name = input[0];
  let type = input[1] ? input[1] : null;
  let word = input[2] ? input[2] : null;

  if (input.length === 1) {
    Dictionary.wordOfTheDay();
  } else {
    switch (type) {
      case "def":
        Dictionary.definitions(word);
        break;
      case "syn":
        Dictionary.synonyms(word);
        break;
      case "ant":
        Dictionary.antonyms(word);
        break;
      case "ex":
        Dictionary.examples(word);
        break;
      case "dict":
        Dictionary.fullDetails(word);
        break;
      default:
        if(input.length === 2){
          Dictionary.fullDetails(input[1]);
        }
    }
  }
};
