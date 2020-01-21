const axios = require('axios');

const self = module.exports = {
    definitions: async (word) => {
        try {
            let url =  `${process.env.apihost}/word/${word}/definitions?api_key=${process.env.API}`
            let res = await self.makeRequest(url);
            return res.status === 200 ? res.data : null;
        } catch (err) {
            throw Error(err);
        }
    },
    synonyms: async (word) => {
        try {
           let url = `${process.env.apihost}/word/${word}/relatedWords?api_key=${process.env.API}`;
            let res = await self.makeRequest(url);
            console.log(res.data)
            return res.status === 200 ? res.data[1].words : null;
        } catch (err) {
            throw Error(err);
        }
    },
    antonyms: async (word) => {
        try {
            let url = `${process.env.apihost}/word/${word}/relatedWords?api_key=${process.env.API}`;
             let res = await self.makeRequest(url);
             return res.status === 200 ? res.data[0].word : null;
         } catch (err) {
             throw Error(err);
         }
    },
    examples: async (word) => {
        try {
            let url = `${process.env.apihost}/word/${word}/examples?api_key=${process.env.API}`;
             let res = await self.makeRequest(url);
             return res.status === 200 ? res.data : null;
         } catch (err) {
             throw Error(err);
         }
    },
    wordOfTheDay : async () => {
        try{
            console.log("fghhg",process.env.API)
            let url = `${process.env.apihost}/words/randomWord?api_key=${process.env.API}`
            let res = await self.makeRequest(url);
            return res.status === 200 ? res.data.word : null;
        } catch (err) {
            throw Error(err);
        }
    },
    makeRequest : async (url) => {
        try {
            // console.log(url)
            let response = await axios.get(url);
            // console.log(response.data)
            return response;
        } catch (err) {
            if(err && err.response && err.response.status === 403){
                throw Error ('Ivalid API .Please check your API KEY')
            } else {
                throw Error('We are unable to fetch from this | Please check your Internet Connectivity')
            }
        }
    },

}