import {coinFlips, countFlips, flipACoin} from './modules/coin.mjs';

const argv = require('minimist')(process.argv.slice(2));

argv["call"];

const c = argv.call;

if(c=="tails" || c == "heads"){
    console.log(flipACoin(c));
}
else {
    console.log("Error: no input.\nUsage: node guess-flip --call=[heads|tails]");
}
