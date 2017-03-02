#!/usr/bin/env node

/**
 * please make sure you run this script from this folder, as it has the file.txt here .. otherwise node repl might not find from any other context
 */

var fs = require("fs");
console.log("start");
fs.readFileSync("file.txt").toString().split("\n").forEach(function(line, index, arr) {
  if (index === arr.length - 1 && line === "") { return; }
  console.log(index + " " + line);
});
console.log("end");
