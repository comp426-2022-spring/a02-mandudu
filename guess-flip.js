import minimist from 'minimist'
import {flipACoin} from './modules/coin.mjs';

const argv = (minimist)(process.argv.slice(2));
const callArgv = argv["call"] || null;

if(callArgv=="tails" || callArgv == "heads"){
    console.log(flipACoin(callArgv));
}
else {
    console.log("Error: no input.\nUsage: node guess-flip --call=[heads|tails]");
}
