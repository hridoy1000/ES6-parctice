const ages = [12, 32, 56, 57, 89];

const ages2 = [12, 57, 99];

const allAges = ages.concat(ages2);

const allAges2 = [...ages, 34, ...ages2];

console.log(allAges);
console.log(allAges2);

const business = 560;
const minister = 450;
const sochib = 570;

const takaPaisa = [560, 450, 570, 850];

const maximum = Math.max(...takaPaisa);

console.log(maximum);