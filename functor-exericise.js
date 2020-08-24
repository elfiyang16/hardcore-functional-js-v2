const Box = (x) => ({
  map: (f) => Box(f(x)),
  fold: (f) => f(x),
  toString: () => `Box(${x})`,
  chain: (f) => f(x),
});

// Exercise: Box
// Goal: Refactor each example using Box
// Keep these tests passing!
// Bonus points: no curly braces

// Ex1: Using Box, refactor moneyToFloat to be unnested.
// =========================
// const moneyToFloat = str =>
//   parseFloat(str.replace(/\$/, ''))

const moneyToFloat = (str) =>
  Box(str)
    .map((s) => s.replace(/\$/, ""))
    .map((s) => parseFloat(s))
    .fold((s) => s);

// Ex2: Using Box, refactor percentToFloat to remove assignment
// =========================
const percentToFloat = (str) => {
  const float = parseFloat(str.replace(/\%/, ""));
  return float * 0.01;
};

// Ex3: Using Box, refactor applyDiscount (hint: each variable introduces a new Box)
// =========================
// const applyDiscount = (price, discount) => {
//   const cents = moneyToFloat(price)
//   const savings = percentToFloat(discount)
//   return cents - (cents * savings)
// }

// const applyDiscount = (price, discount) =>
//   Box(moneyToFloat(price)).fold((cents) =>
//     Box(percentToFloat(discount)).fold((savings) => cents - cents * savings)
//   );

const applyDiscount = (price, discount) =>
  Box(moneyToFloat(price)).chain((cents) =>
    Box(percentToFloat(discount)).fold((savings) => cents - cents * savings)
  );
