const dictionaryHelper = require("../helpers/dictionary.js");
const printer = require("../helpers/output.js");

const self = (module.exports = {
  definitions: async word => {
    try {
      let def = await dictionaryHelper.definitions(word);
      printer.headLine('Definition')  
      printer.printDefinitions(def);
    } catch (err) {
      console.log(err);
    }
  },
  synonyms: async word => {
    try {
      let syn = await dictionaryHelper.synonyms(word);
      printer.headLine('Synonyms') 
      printer.printSynonymsAndAntonyms(syn,'Synonyms');
    } catch (err) {
      console.log(err);
    }
  },
  antonyms: async word => {
    try {
      let ant = await dictionaryHelper.antonyms(word);
      printer.headLine('Antonyms');
      printer.printSynonymsAndAntonyms(ant,'Antonyms');
    } catch (err) {
      console.log(err);
    }
  },
  examples: async word => {
    try {
      let ex = await dictionaryHelper.examples(word);
      printer.headLine('Examples');
      printer.printExamples(ex);
    } catch (err) {
      console.log(err);
    }
  },
  fullDetails: async word => {
    try {
      await self.definitions(word);
      await self.synonyms(word);
      await self.antonyms(word);
      await self.examples(word);
    } catch (err) {
      console.log(err);
    }
  },
  wordOfTheDay: async () => {
    try {
      let word = await dictionaryHelper.wordOfTheDay();
      console.log(`
----------------------------------------------------
Word Of The Day is :- ${word}         
            `)
      await self.fullDetails(word);
    } catch (err) {
      console.log(err);
    }
  }
});
