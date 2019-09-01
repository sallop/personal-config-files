//require('babel-polyfill');

// some setup first
var chai = require('chai');
var chaiEnzyme = require('chai-enzyme');

chai.use(chaiEnzyme());


//var path = require('path');
//var process = require('process');
// var context = require.context('./src', true, /\.[sS]pec\.jsx?$/);
// console.log( path.resolve("."));
// console.log( path.resolve("./test"));
// console.log( process.cwd());
var context = require.context('./test', true, /[sS]pec\.jsx?$/);
context.keys().forEach(context);
