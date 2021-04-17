// functions are curried and can be used to create customer functions with saved parameters

exports.addition = (x) => {
  return (y) => {
    return x + y;
  };
};

exports.mult = (x) => {
  return (y) => {
    return x * y;
  };
};

exports.divBy = (x) => {
  return (y) => {
    return y / x;
  };
};

exports.modBy = (x) => {
  return (y) => {
    return y % x;
  };
};
