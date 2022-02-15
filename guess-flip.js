import minimist from 'minimist';
import {flipACoin} from './modules/coin.mjs';

const argv = (minimist)(process.argv.slice(2));
argv["call"];
const cArgs = argv.call;

if(cArgs=="tails" || callArg == "heads"){
    console.log(flipACoin(cArgs));
}
else {
    console.log("Error: no input.\nUsage: node guess-flip --call=[heads|tails]");
}
