import { funA } from "pkg-a";
import { funB, funA as funAFromPkgB } from "pkg-b";

funA();
funB();
console.assert(funA !== funAFromPkgB);
