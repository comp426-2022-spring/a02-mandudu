import { coinFlips, countFlips } from "./modules/coin.mjs";
import minimist from "minimist";


const argv = minimist(process.argv.slice(2));

argv["number"];
const tmp = argv.number || 1;

let flips = (coinFlips(tmp));


console.log(flips);
console.log(countFlips(flips));
