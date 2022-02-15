import minimist from 'minimist';
import {flipACoin} from './modules/coin.mjs';

const arg = (minimist)(process.argv.slice(2));
const cArgs = arg["call"] || null;

if(cArgs=="tails" || callArg == "heads"){
    console.log(flipACoin(cArgs));
}
else {
    console.log("Error: no input.\nUsage: node guess-flip --call=[heads|tails]");
}
