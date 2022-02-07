import {coinFlips, countFlips, flipACoin} from './modules/coin.mjs';

const argv = require('minimist')(process.argv.slice(2));

if(argv.call ==null || argv.call != "tails" || argv.call != "heads"){
    throw new Error("node guess-flip --call=[heads|tails")
}
console.log(flipACoin(argv.call));