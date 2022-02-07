import {coinFlip, coinFlips} from "./modules/coin.mjs";

var argv = require('minimist')(process.argv.slice(2));

if(argv.number ==null) {
    var flipNum = coinFlip(1);
    console.log(flipNum, countFlips(flipNum));
}
else{
    var flipNum = coinFlips(argv.number)
    console/log(flipNum, countflips(flipNum));
    }
