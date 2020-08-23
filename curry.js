const { curry } = require("ramda");

// const add = (x, y) => x + y;

// const curry = (f) => (x) => (y) => f(x, y);
// const uncurry = (f) => (x, y) => f(x)(y);
// const curriedAdd = curry(add);

// const modulo = curry((x, y) => y % x);

// const isOdd = modulo(2); // (2, y) => 2 % y  as now x = 2
// const result = isOdd(3); //false

// const filter = curry((f, xs) => xs.filter(f));
// the sequence matters: can't have
// const filter = curry((xs, f) => f.filter(xs));
//1st arg: to be remembered; 2nd arg: input

const getOdds = filter(isOdd);
const toFiltered = getOdds([1, 2, 3, 4, 5]);

// const replace = curry((regex, replacement, str) =>
//   str.replace(regex, replacement)
// );

// const replaceVowels = replace(/[AEIOU]/gi, "!");

// const result = replaceVowels("Hey I have words");

// console.log(result);
