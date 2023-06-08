const assertEqual = require('../assertEqual');
const tail = require('../tail');

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2)
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);
const a = tail(["Yo"]);
assertEqual(a.length, 0);
const b = tail([]);
assertEqual(b.length, 0);
