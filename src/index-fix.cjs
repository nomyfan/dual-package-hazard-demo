const { funA } = require("pkg-a-fix");
const { funB, funA: funAFromPkgB } = require("pkg-b-fix");

funA();
funB();
console.assert(funA === funAFromPkgB);
