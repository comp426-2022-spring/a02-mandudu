import minimist from 'minimist';
import { flipACoin } from './modules/coin.mjs';

const argv = minimist(process.argv.slice(2));
const cArgs = args["call"] || null;

if(cArgs=="tails" || cArgs == "heads"){
    console.log(flipACoin(cArgs));
}
else {
    console.log("Error: no input.\nUsage: node guess-flip --call=[heads|tails]");
}
