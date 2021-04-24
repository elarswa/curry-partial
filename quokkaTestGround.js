const adder_curry = (x) => {
  return (y) => {
    return x + y;
  };
};

function addFactory(x, y) {
  return x + y;
}

//functional variant
const f_addFactory = (x, y) => {
  console.log(x, y);
  return x + y;
};
// bind(thisValue, param, ...)
// creating partially applied functions
const add5 = addFactory.bind(null, 5); // bind to x
const add9 = f_addFactory.bind(null, 9);

let _1 = 5;
_1 = add5(_1);
_1;
_1 = add9(_1);
_1;

// calling a curried function
curry = adder_curry(5)(6);
curry;

// short form curried function
const test = (var1) => (var2) => var1 * var2;
console.log(test); // lamda
console.log(test(2)(2));

const urlBuilder = (protocol) => (domain) => (path) =>
  `${protocol}://${domain}/${path}`;

const httpBuilder = urlBuilder("http");
const httpsBuilder = urlBuilder("https");

const url1 = httpBuilder("what.com")("notSecure");
const url2 = httpsBuilder("what.com")("secure");

url1;
url2;
