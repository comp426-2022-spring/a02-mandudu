import minimist from 'minimist';
import {coinFlips, countFlips} from "./modules/coin.mjs";

const argv = (minimist)(process.argv.slice(2));

argv["number"];
const tmp = argv.number || 1;

var headTail =[];
for(let i =0; i<number; i++) {
    headTail.push(coinFlips(1));
}


console.log(headTail);
console.log(countFlips(headTail));
