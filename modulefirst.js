
//Common JS method
//const hello=require("./modulesecond");
// hello();

//ES6 method
//file ka extension .mjs hoga
// import {hello} from "./modulesecond.mjs"
// hello();

//agar ek se jada import krwana h toh
// import {hello, namaste} from "./modulesecond.mjs"
// hello();
// namaste();

import * as a from "./modulesecond.mjs"
console.log(a);
a.hello();
a.namaste();

// import {hello as hello1} from "./modulesecond.mjs"
// hello1();

//by defult namaste hi print krega
// import sans from "./modulesecond.mjs"
// sans();
