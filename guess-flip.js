import minimist from 'minimist';
import { flipACoin } from './modules/coin.mjs';

const argv = minimist(process.argv.slice(2));
argv["call"];

const callArgs = argv.call;

if(callArgs=="tails" || callArgs == "heads"){
    console.log(flipACoin(callArgs));
}
else {
    console.log("Error: no input.\nUsage: node guess-flip --call=[heads|tails]");
}
