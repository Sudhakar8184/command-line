require('dotenv').config();

process.stdin.setEncoding('utf8');
process.stdin.on("data", input => {
    fetchResult(input.trim());
});

function fetchResult(input) {
    let checked = checkEnteredInput(input);
        checked && require('./config/dictionary.js')(input);

}

function checkEnteredInput(input) {
    if(input) {
        input = input.split(' ');
        if(input.length >= 1 && input.length < 4 && input[0] === './dict') {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
    
}