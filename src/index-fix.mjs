import { funA } from "pkg-a-fix";
import { funB, funA as funAFromPkgB } from "pkg-b-fix";

funA();
funB();
console.assert(funA !== funAFromPkgB);
