const assert = require('chai').assert;
const tail = require('../tail');
describe('#tail', () => {
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });
  it("returns ['Lighthouse', 'Labs']for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Yo Yo', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });
  it("returns [] for ['Yo']", () => {
    assert.deepEqual(tail(['Yo']), []);
  });
  it("returns [] for []", () => {
    assert.deepEqual(tail([]), []);
  });
});

// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2)
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words);
// assertEqual(words.length, 3);
// const a = tail(["Yo"]);
// assertEqual(a.length, 0);
// const b = tail([]);
// assertEqual(b.length, 0);
