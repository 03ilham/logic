const x = 0.1 + 0.2;
const y = 0.3;
const z = x === y;
console.log(z);

const k = Math.abs(x-y) < Number.EPSILON
console.log(k);

Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2;

Number.MIN_SAFE_INTEGER - 1 === Number.MIN_SAFE_INTEGER - 2;

Infinity > Number.MAX_SAFE_INTEGER;
-Infinity < Number.MAX_SAFE_INTEGER
-Infinity -32323323 == Infinity -1;
