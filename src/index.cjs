const { funA } = require("pkg-a");
const { funB, funA: funAFromPkgB } = require("pkg-b");

funA();
funB();
console.assert(funA === funAFromPkgB);
