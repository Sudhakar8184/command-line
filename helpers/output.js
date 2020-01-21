
module.exports = {
    headLine: (value) => {
        console.log(`
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
${value} :-
 `)
    },

    printDefinitions: (data) => {
        if (data.length) {
            data.forEach(element => {
                    console.log(`
*********************************************            
Definition       : ${element.text}

            `)
            })
        } else {
            console.log(`
Sorry, No Definitions Found            
                        `)
        }
    },
    printSynonymsAndAntonyms: (data,type) => {
        if (data && data.length > 0) {
            data.forEach(element => {
                console.log(`${element}`)
            });
            console.log(`
        `)
        } else {
            if(type = 'Synonyms')
            console.log(`
Sorry, No Synonyms Found            
            `)
            else
            console.log(`
            Sorry, No Synonyms Found            
                        `)
        }
    },
    printExamples: (data) => {
        if (data.examples) {
            data.examples.forEach(element => {
                console.log(`
${element.text}
                `)
            })
        } else {
            console.log(`
Sorry, No Examples Found            
                        `)
        }
    }

}