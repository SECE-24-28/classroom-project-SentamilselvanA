console.clear();

// ---------- CREATION METHODS ----------
const arr_from = Array.from([1, 2, 3]);
const arr_of = Array.of(1, 2, 3);
const arr_fill = new Array(5).fill(0);
const arr_concat = [1, 2].concat([3, 4]);
const arr_spread = [...[1, 2], ...[3, 4]];

// ---------- CHECKING / INFO ----------
const arr_isArray = Array.isArray([1, 2, 3]);
const arr_length = [1, 2, 3].length;

// ---------- ACCESSOR METHODS (DON’T CHANGE ORIGINAL) ----------
const arr_at = [10, 20, 30].at(1);
const arr_slice = [1, 2, 3, 4].slice(1, 3);
const arr_join = [1, 2, 3].join("-");
const arr_includes = [1, 2, 3].includes(2);
const arr_indexOf = [1, 2, 3].indexOf(3);
const arr_lastIndexOf = [1, 2, 3, 2].lastIndexOf(2);
const arr_toString = [1, 2, 3].toString();
const arr_toLocaleString = [1000].toLocaleString();

// ---------- SEARCH METHODS ----------
const arr_find = [10, 20, 30].find(x => x > 15);
const arr_findIndex = [10, 20, 30].findIndex(x => x > 15);
const arr_findLast = [10, 20, 30].findLast(x => x > 15);
const arr_findLastIndex = [10, 20, 30].findLastIndex(x => x > 15);

// ---------- HELPERS / FLAT ----------
const arr_flat = [1, [2, [3]]].flat(2);
const arr_flatMap = [1, 2, 3].flatMap(x => [x, x * 2]);

// ---------- ITERATION ----------
const arr_forEach = [];
[1, 2, 3].forEach(x => arr_forEach.push(x * 10));

const arr_map = [1, 2, 3].map(x => x * 2);
const arr_filter = [1, 2, 3, 4].filter(x => x % 2 === 0);
const arr_reduce = [1, 2, 3].reduce((a, b) => a + b, 0);
const arr_reduceRight = ["a", "b", "c"].reduceRight((a, b) => a + b);

// ---------- SORTING ----------
const arr_sort = [3, 1, 2].sort((a, b) => a - b);
const arr_reverse = [1, 2, 3].reverse();
const arr_toSorted = [3, 1, 2].toSorted(); // doesn't mutate
const arr_toReversed = [1, 2, 3].toReversed();
const arr_toSpliced = [1, 2, 3, 4].toSpliced(1, 2);

// ---------- MUTATION METHODS ----------
const arr_push = [1, 2]; arr_push.push(3); // modifies
const arr_pop = [1, 2, 3]; arr_pop.pop();
const arr_shift = [1, 2, 3]; arr_shift.shift();
const arr_unshift = [2, 3]; arr_unshift.unshift(1);
const arr_splice = [1, 2, 3, 4]; arr_splice.splice(1, 2, 20, 30);
const arr_copyWithin = [1, 2, 3, 4, 5]; arr_copyWithin.copyWithin(1, 3);
const arr_fill2 = [1, 2, 3]; arr_fill2.fill(9);

// ---------- NEW ES2023 IMMUTABLE METHODS ----------
const arr_with = [1, 2, 3].with(1, 50);

// ---------- CONVERSION ----------
const arr_keys = [...[10, 20, 30].keys()];
const arr_values = [...[10, 20, 30].values()];
const arr_entries = [...[10, 20, 30].entries()];
const arr_fromString = Array.from("hello");

// ---------- PRINT OUTPUT ----------
console.log({
  arr_from, arr_of, arr_fill, arr_concat, arr_spread,
  arr_isArray, arr_length, arr_at, arr_slice, arr_join,
  arr_includes, arr_indexOf, arr_lastIndexOf, arr_toString, arr_toLocaleString,
  arr_find, arr_findIndex, arr_findLast, arr_findLastIndex,
  arr_flat, arr_flatMap, arr_forEach, arr_map, arr_filter,
  arr_reduce, arr_reduceRight, arr_sort, arr_reverse,
  arr_toSorted, arr_toReversed, arr_toSpliced,
  arr_push, arr_pop, arr_shift, arr_unshift, arr_splice,
  arr_copyWithin, arr_fill2, arr_with,
  arr_keys, arr_values, arr_entries, arr_fromString
});