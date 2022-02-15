import minimist from 'minimist'
import {coinFlips, coinFlips} from "./modules/coin.mjs";

var argv = (minimist)(process.argv.slice(2));

argv["number"];
const tmp = argv.number || 1;

let flips = (coinFlips(tmp));

console.log(flips);
console.log(countFlips(flips));
