import { foo } from "./foo.mjs";
import {bar, getCounter, items, counter } from "./bar.mjs";

foo();
console.log(items);
console.log(getCounter());
console.log(counter);

bar();
console.log(items);          // ["item 1", "item 2"]
console.log(getCounter());   // 2
console.log(counter);        // 2
