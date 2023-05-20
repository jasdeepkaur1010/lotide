const assertEqual = function(actual, expected){
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion failed: ${actual} !== ${expected}`);
  }
};
function tail(a) {
  return a.slice(1);
}

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2)
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);
const a = tail(["Yo"]);
assertEqual(a.length, 0);
const b = tail([]);
assertEqual(b.length, 0);
