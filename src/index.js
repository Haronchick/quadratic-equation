module.exports = function solveEquation(equation) {

  // your implementation
  let resultArray = [];
  //  -20 * x^2 - 108797540 * x - 130011773690520

  let reg = /(.\d+)\s.\s...\s([+-].\d+)\s\*\s.\s([+-].\d+)/;
  let match = equation.match(reg);
  let a = +match[1].replace(' ','');
  let b = +match[2].replace(' ','');
  let c = +match[3].replace(' ','');
  let d = b**2 - (4 * a * c);

  if (d > 0) {
      let x1 = (-b + Math.sqrt(d)) / (2 * a);
      let x2 = (-b - Math.sqrt(d)) / (2 * a);
      resultArray.push(Math.round(x1),Math.round(x2));
  }

    return resultArray.sort((a,b) => a > b ? 1 : -1);
};
