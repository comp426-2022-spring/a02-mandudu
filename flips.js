import {coinFlip, coinFlips} from "./modules/coin.mjs";

var argv = require('minimist')(process.argv.slice(2));

argv["number"];
const tmp = argv.number || 1;

let flips = (coinFlips(tmp));

console.log(flips);
console.log(countFlips(flips));
