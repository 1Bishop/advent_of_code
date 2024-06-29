import {day_one} from "./2023/day1/day1.ts";

export function add(a: number, b: number): number {
  return a + b;
}

// Learn more at https://deno.land/manual/examples/module_metadata#concepts
if (import.meta.main) {
  console.log("Add 2 + 3 =", add(2, 3));
}

import "./2023/day1/day1.ts";


day_one().then(done => console.log(done))



